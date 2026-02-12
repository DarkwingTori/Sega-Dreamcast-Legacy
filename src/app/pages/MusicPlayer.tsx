import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Search, X, ArrowLeft } from "lucide-react";
import { dreamcastSoundtracks, Track } from "../data/soundtracks";
import { NavigationContext } from "../App";

// Import album covers
import jsrCover from "@/assets/japanjetsetradiocd.jpg";
import sonicCover from "@/assets/sonicadventuremusiccover.jpg";
import mvcCover from "@/assets/mvcsongcover.jpg";
import crazyTaxiCover from "@/assets/ab67706c0000da849c1e65e1ccaaccdcc5faa6d8.jpg";
import skiesOfArcadiaCover from "@/assets/skysofarcadiasoundtrack.jpeg";
import tonyHawkCover from "@/assets/ab67616d0000b27363f334ffb9b7c93ceeb56476.jpg";
import shenmueCover from "@/assets/960781bc57b4113b3abc8af3eafa225d5d369cbb.png";
import placeholderCover from "@/assets/8a5ee94fb389d3350d22f10a8d2834a347ba2500.png";

// YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlayer() {
  const { navigate } = useContext(NavigationContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<Track>(dreamcastSoundtracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTracks, setFilteredTracks] = useState<Track[]>(dreamcastSoundtracks);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<number | null>(null);

  // Map cover art strings to imported images
  const getCoverImage = (coverArt: string): string => {
    if (coverArt.includes("f0f3d6ee7655874d9a79350dc5032d5b2eb9fed6")) return jsrCover;
    if (coverArt.includes("c66fde0a24fcdb0e9e2dfd720e405f091100aef9")) return sonicCover;
    if (coverArt.includes("06526c341176cc2edf2104f963f5553e02fc4d85")) return mvcCover;
    if (coverArt.includes("1a2111c631e2a10884ce8cfd0fa755120989b93b")) return crazyTaxiCover;
    if (coverArt.includes("1f89f21924e4a4f57bb3d22a82b456a0e3aaacc4")) return skiesOfArcadiaCover;
    if (coverArt.includes("ca6c002e426ea427c1d7219d2cd1099634ff3532")) return tonyHawkCover;
    if (coverArt.includes("960781bc57b4113b3abc8af3eafa225d5d369cbb")) return shenmueCover;
    return placeholderCover;
  };

  // Responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const albumSize = isMobile ? 170 : 200;
  const spacing = isMobile ? 120 : 160;

  // Search filter with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredTracks(dreamcastSoundtracks);
      } else {
        const filtered = dreamcastSoundtracks.filter(track =>
          track.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          track.trackName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTracks(filtered);
        if (filtered.length > 0) {
          setCurrentIndex(0);
          setSelectedTrack(filtered[0]);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load YouTube IFrame API (once on mount)
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    }

    return () => {
      // Clean up interval on unmount
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []); // Only run once on mount

  // Initialize player once
  const initializePlayer = () => {
    if (playerRef.current) return; // Don't recreate if already exists

    try {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: selectedTrack.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          fs: 0,
          playsinline: 1,
        },
        events: {
          onReady: handlePlayerReady,
          onStateChange: handlePlayerStateChange,
          onError: handlePlayerError,
        },
      });
    } catch (err) {
      console.error('Failed to initialize YouTube player:', err);
      setError('Failed to load player');
    }
  };

  // Handle player ready
  const handlePlayerReady = (event: any) => {
    setIsReady(true);
    setIsLoading(false);
    updateDuration();
  };

  // Handle player state changes
  const handlePlayerStateChange = (event: any) => {
    const state = event.data;
    
    if (state === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setError(null);
      startProgressTracking();
      updateDuration();
    } else if (state === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      stopProgressTracking();
    } else if (state === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      stopProgressTracking();
      // Auto-advance to next track
      if (currentIndex < filteredTracks.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedTrack(filteredTracks[currentIndex + 1]);
      }
    } else if (state === window.YT.PlayerState.BUFFERING) {
      setIsLoading(true);
    } else if (state === window.YT.PlayerState.CUED) {
      setIsLoading(false);
      updateDuration();
    }
  };

  // Handle player errors
  const handlePlayerError = (event: any) => {
    const errorCode = event.data;
    let errorMessage = 'Playback error';
    let shouldSkip = false;
    
    switch (errorCode) {
      case 2:
        errorMessage = 'Invalid video ID';
        shouldSkip = true;
        break;
      case 5:
        errorMessage = 'HTML5 player error';
        break;
      case 100:
        errorMessage = 'Video not found';
        shouldSkip = true;
        break;
      case 101:
      case 150:
        errorMessage = 'Video cannot be embedded - skipping...';
        shouldSkip = true;
        break;
      default:
        errorMessage = 'Unknown error occurred';
    }
    
    setError(errorMessage);
    setIsPlaying(false);
    setIsLoading(false);
    console.error('YouTube Player Error:', errorCode, errorMessage);
    
    // Auto-skip to next track after 2 seconds if embedding is blocked
    if (shouldSkip && currentIndex < filteredTracks.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedTrack(filteredTracks[currentIndex + 1]);
        setError(null);
      }, 2000);
    }
  };

  // Update duration from player
  const updateDuration = () => {
    if (playerRef.current && playerRef.current.getDuration) {
      const dur = playerRef.current.getDuration();
      if (dur && dur > 0) {
        setDuration(dur);
      }
    }
  };

  // Start progress tracking
  const startProgressTracking = () => {
    stopProgressTracking(); // Clear any existing interval
    
    progressIntervalRef.current = window.setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const time = playerRef.current.getCurrentTime();
        setCurrentTime(time);
      }
    }, 500); // Update every 500ms
  };

  // Stop progress tracking
  const stopProgressTracking = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  // Load new track when selectedTrack changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById && isReady) {
      setIsLoading(true);
      setError(null);
      setCurrentTime(0);
      
      // Stop current playback
      if (isPlaying) {
        playerRef.current.stopVideo();
      }
      
      // Load new video
      playerRef.current.loadVideoById({
        videoId: selectedTrack.youtubeId,
        startSeconds: 0,
      });
    }
  }, [selectedTrack.youtubeId]);

  // Format time helper
  const formatTime = (seconds: number): string => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTogglePlay = () => {
    if (!playerRef.current || !isReady) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  // 3D Transform calculations
  const getTransform = (index: number) => {
    const baseOffset = index - currentIndex;
    const offset = baseOffset + (isDragging ? dragOffset / 100 : 0);
    const ROTATION = 55;

    if (Math.abs(offset) < 0.1) {
      return `translateX(0px) translateZ(300px) rotateY(0deg) scale(1.3)`;
    } else if (offset < 0) {
      const distance = Math.abs(offset);
      const x = -spacing * distance;
      const z = -80 * distance;
      const scale = Math.max(0.8, 1.15 - (distance * 0.04));
      return `translateX(${x}px) translateZ(${z}px) rotateY(${ROTATION}deg) scale(${scale})`;
    } else {
      const distance = Math.abs(offset);
      const x = spacing * distance;
      const z = -80 * distance;
      const scale = Math.max(0.8, 1.15 - (distance * 0.04));
      return `translateX(${x}px) translateZ(${z}px) rotateY(-${ROTATION}deg) scale(${scale})`;
    }
  };

  const getZIndex = (index: number) => {
    const offset = Math.abs(index - currentIndex);
    if (offset === 0) return 1000;
    if (offset === 1) return 100;
    if (offset === 2) return 50;
    return Math.max(1, 10 - offset);
  };

  const getOpacity = (index: number) => {
    const baseOffset = index - currentIndex;
    const offset = Math.abs(baseOffset + (isDragging ? dragOffset / 100 : 0));
    
    if (offset < 0.1) return 1;
    if (offset <= 2) return 1;
    if (offset <= 3) return 0.95;
    return Math.max(0.8, 0.9 - ((offset - 3) * 0.05));
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 50;
    if (dragOffset > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedTrack(filteredTracks[currentIndex - 1]);
    } else if (dragOffset < -threshold && currentIndex < filteredTracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedTrack(filteredTracks[currentIndex + 1]);
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const handleAlbumClick = (track: Track, index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setSelectedTrack(track);
    }
  };

  return (
    <div 
      className="h-screen text-white overflow-hidden relative"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0d0d1a 50%, #000000 100%)',
        isolation: 'isolate'
      }}
    >
      {/* Reflective floor effect */}
      <div 
        className="fixed bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '50vh',
          background: 'linear-gradient(to top, rgba(255,255,255,0.02) 0%, transparent 100%)',
          zIndex: 1
        }}
      />

      {/* Header */}
      <div 
        className="relative grid grid-cols-3 items-center p-4 bg-black/20 backdrop-blur-md"
        style={{ zIndex: 500 }}
      >
        {/* Left Section - Back Button */}
        <div className="flex items-center gap-2 justify-start">
          <button 
            onClick={() => navigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-light hidden sm:inline">Back</span>
          </button>
        </div>
        
        {/* Center Section - DREAMCAST Branding */}
        <div className="flex items-center gap-2 justify-center">
          <div 
            className="w-2 h-2 rounded-full shadow-sm"
            style={{ background: '#F97308' }}
          />
          <span 
            className="text-sm font-medium tracking-wide"
            style={{ color: '#F97308' }}
          >
            DREAMCAST
          </span>
        </div>
        
        {/* Right Section - Battery */}
        <div className="flex items-center gap-1 justify-end">
          <div 
            className="w-6 h-3 rounded-sm shadow-sm"
            style={{
              background: 'linear-gradient(to right, #F97308, #ff8533)'
            }}
          />
          <div className="text-xs text-gray-400">100%</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative p-4" style={{ zIndex: 450 }}>
        <div className="w-full max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for games or tracks..."
              className="w-full pl-10 pr-10 py-3 bg-black/30 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm font-light"
              style={{
                background: 'linear-gradient(145deg, rgba(0,0,0,0.4), rgba(255,255,255,0.02))',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(255,255,255,0.05)',
                borderColor: searchQuery ? '#F97308' : '#374151'
              }}
            />
            
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className="relative flex-1 flex flex-col items-center justify-center px-4 md:px-8 pb-16"
        style={{ 
          zIndex: 200,
          height: 'calc(100vh - 140px)'
        }}
      >
        {/* CoverFlow */}
        <div className="w-full max-w-7xl mx-auto relative" style={{ zIndex: 300 }}>
          <div
            ref={containerRef}
            className="relative h-96 flex items-center justify-center overflow-visible select-none"
            style={{
              perspective: '1500px',
              perspectiveOrigin: 'center center',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {filteredTracks.map((track, index) => (
              <div
                key={track.id}
                className="absolute select-none"
                style={{
                  transform: getTransform(index),
                  zIndex: getZIndex(index) + 1000,
                  opacity: getOpacity(index),
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  transition: isDragging ? 'none' : 'all 400ms cubic-bezier(0.23, 1, 0.32, 1)'
                }}
                onClick={() => handleAlbumClick(track, index)}
              >
                <div
                  className="relative group select-none"
                  style={{
                    width: `${albumSize}px`,
                    height: `${albumSize}px`
                  }}
                >
                  {/* Album Cover */}
                  <img
                    src={getCoverImage(track.coverArt)}
                    alt={track.trackName}
                    draggable={false}
                    className="w-full h-full object-cover rounded-lg shadow-2xl border border-gray-800/30 select-none"
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      userSelect: 'none'
                    }}
                  />

                  {/* Glass reflection effect */}
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 25%, transparent 50%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.08) 100%)'
                    }}
                  />

                  {/* iOS-style reflection */}
                  <div
                    className="absolute top-full left-0 w-full h-full rounded-lg pointer-events-none select-none transition-all duration-500"
                    style={{
                      backgroundImage: `url(${getCoverImage(track.coverArt)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      transform: 'scaleY(-1) translateY(0px)',
                      opacity: index === currentIndex ? 0.9 : 0.75,
                      maskImage: 'linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.15) 40%, transparent 60%)',
                      WebkitMaskImage: 'linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.15) 40%, transparent 60%)',
                      filter: 'blur(0.5px) brightness(0.6) contrast(1.3)'
                    }}
                  />

                  {/* Floor highlight */}
                  <div
                    className="absolute top-full left-0 w-full h-3 rounded-lg pointer-events-none select-none transition-opacity duration-1000"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 40%, transparent 100%)',
                      transform: 'translateY(6px)',
                      opacity: index === currentIndex ? 0.6 : 0.35
                    }}
                  />

                  {/* Center card indicators */}
                  {index === currentIndex && (
                    <>
                      <div 
                        className="absolute inset-0 rounded-lg shadow-2xl"
                        style={{ border: '2px solid #F97308' }}
                      />
                      <div 
                        className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full opacity-90 shadow-lg animate-pulse"
                        style={{ background: '#F97308' }}
                      />
                      <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-white/20 rounded-full blur-sm" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Song Info & Player */}
        {selectedTrack && (
          <div className="mt-8 text-center relative" style={{ zIndex: 250 }}>
            <div className="bg-transparent p-2">
              <h2 className="text-xl font-light mb-2 text-white drop-shadow-lg">
                {selectedTrack.trackName}
              </h2>
              <p className="text-base mb-1 font-light text-gray-300 drop-shadow-md">
                {selectedTrack.gameTitle}
              </p>

              {/* Hidden YouTube Player */}
              <div style={{ display: 'none' }}>
                <div id="youtube-player"></div>
              </div>

              {/* Player Controls */}
              <div className="flex flex-col items-center gap-6 mt-6 relative" style={{ zIndex: 100 }}>
                <div className="flex items-center gap-8">
                  {/* Previous Button */}
                  <button
                    className="group relative flex items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-all duration-200 transform hover:scale-110 active:scale-95"
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1);
                        setSelectedTrack(filteredTracks[currentIndex - 1]);
                      }
                    }}
                    disabled={currentIndex === 0}
                    style={{
                      opacity: currentIndex === 0 ? 0.3 : 1
                    }}
                  >
                    <SkipBack className="w-8 h-8" />
                  </button>

                  {/* Play/Pause Button */}
                  <button
                    onClick={handleTogglePlay}
                    disabled={!isReady}
                    className="group relative flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    style={{
                      boxShadow: `
                        0 12px 40px rgba(249, 115, 8, 0.4),
                        0 4px 16px rgba(0, 0, 0, 0.1),
                        inset 0 1px 3px rgba(255, 255, 255, 0.2)
                      `
                    }}
                  >
                    {!isReady ? (
                      <svg className="w-8 h-8 text-black animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : !isPlaying ? (
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    ) : (
                      <Pause className="w-8 h-8 text-black" fill="currentColor" />
                    )}
                    
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>

                  {/* Next Button */}
                  <button
                    className="group relative flex items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-all duration-200 transform hover:scale-110 active:scale-95"
                    onClick={() => {
                      if (currentIndex < filteredTracks.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                        setSelectedTrack(filteredTracks[currentIndex + 1]);
                      }
                    }}
                    disabled={currentIndex === filteredTracks.length - 1}
                    style={{
                      opacity: currentIndex === filteredTracks.length - 1 ? 0.3 : 1
                    }}
                  >
                    <SkipForward className="w-8 h-8" />
                  </button>
                </div>

                {/* Progress Bar */}
                {isReady && duration > 0 && (
                  <div className="w-full max-w-md px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 font-mono min-w-[40px]">
                        {formatTime(currentTime)}
                      </span>
                      
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative group">
                        {/* Progress fill */}
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${(currentTime / duration) * 100}%`,
                            background: 'linear-gradient(to right, #F97308, #ff8533)'
                          }}
                        />
                        
                        {/* Glow effect */}
                        <div
                          className="absolute top-0 h-full rounded-full opacity-50 blur-sm"
                          style={{
                            width: `${(currentTime / duration) * 100}%`,
                            background: '#F97308'
                          }}
                        />
                      </div>
                      
                      <span className="text-xs text-gray-400 font-mono min-w-[40px]">
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Status/Error Message */}
                {error ? (
                  <p className="text-sm text-red-400 font-light tracking-wide relative" style={{ zIndex: 100 }}>
                    {error}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 font-light tracking-wide relative" style={{ zIndex: 100 }}>
                    {!isReady ? 'Loading player...' : isLoading ? '' : isPlaying ? 'Now Playing' : 'Tap to play'}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}