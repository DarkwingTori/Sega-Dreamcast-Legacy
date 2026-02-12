import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GlobalHeader } from "../components/GlobalHeader";
import { GameFooter } from "../components/GameFooter";

// Dreamcast Console & Branding
import dreamcastLogo from "@/assets/5ef16fb77ae0eb8e7ee8fea28455000d7cb998f3.png";
import dreamcastConsole from "@/assets/d05d901ca81d28410a0733e711cf3fb1d0339372.avif";
import dreamcastBox from "@/assets/a0cb6cd508a4ecbebdc0ee3b4007f1befe2260aa.avif";

// Sonic Adventure
import sonicFrontCover from "@/assets/18e748cf4d8d77e3c7617a3aa2abca52d716df40.avif";
import sonicBackCover from "@/assets/af61742aedcd40f145ca46761c7af209f8d95a8d.png";
import sonicDisc from "@/assets/32981df6ea672b5a1321e2ca8d54c7dcb81e3c3a.png";
import sonicCharacter from "@/assets/bb53a15ae3c3b835f54b67efb75c66c9dbae0f1a.avif";
import tailsCharacter from "@/assets/28f6e1b603f9ddcee8e233c3e45e9147444e372f.avif";
import knucklesCharacter from "@/assets/4753f231a52c4c0af02024741c02190901d77c74.avif";
import amyCharacter from "@/assets/59e0c64219ef55accfd5dbdf9b9b0cdbc94197c7.avif";
import bigCharacter from "@/assets/75d151bee16800f53431d3b1a957d2f97f400130.avif";
import gammaCharacter from "@/assets/ff8511529bccbd3a9d9ba91f20f0f95b6f4a789e.avif";
import sonicMontage from "@/assets/470787c8b5e797ae102d2a13544b35f7985dfc7f.avif";
import sonicGameplay from "@/assets/4967581f1a918a324972f996cd4527783e66facd.avif";
import sonicVMU from "@/assets/f8cbbb14e4e0c7d4fb428a4859c813e11fc10b03.avif";

// Tony Hawk's Pro Skater 2
import tonyFrontCover from "@/assets/911a82a6a47ef0179bf3339fbc154bd98056582a.avif";
import tonyBackCover from "@/assets/30d0b2800b4b594730be4ae4ce6b6134854a09c9.avif";
import tonyDisc from "@/assets/c4c24c6804f9dc70e05d46a42b9a2c9dbbbe330d.avif";
import tonyAerial from "@/assets/6c6c80fbd2ce15621c2ac8583831ae16c2da8733.avif";
import tonyLoading from "@/assets/ce03a2076d6f15bf03210800514f12703364666b.avif";
import tonyGameplay from "@/assets/0fc4a69e78606f0d22262bb179d5e9e3749e9357.avif";

// Jet Set Radio
import jsrFrontCover from "@/assets/592834ee3abc8f86397377ffef86b92f3b8c84a3.png";
import jsrBackCover from "@/assets/ff49042efac4aee900451c654935ed75e5bf9ba3.png";
import jsrDisc from "@/assets/ad2616306cede2867dc833f03550602b77692fd0.png";
import jsrCharacterAction from "@/assets/997db96ec1d3210f2dfb328a3bfca7f58dc850b3.avif";
import jsrCharacterLineup from "@/assets/c3c056682be0d2c544d2a46f57b482e81d3e82f3.avif";
import jsrCharacterGroup from "@/assets/56b07f3017f5165ac51c0c50f7f6c37eb5d8ea16.avif";

// Marvel vs. Capcom
import mvcFrontCover from "@/assets/3d8d77435b91e75b45428308afe724a199303578.avif";
import mvcBackCover from "@/assets/17711ad511ad8cc2346d55f9d097e833799cbe54.avif";
import mvcCharacterSelect from "@/assets/bef495b9770e8feab6050b979c8580400dbf5db0.avif";
import mvcPosterArt from "@/assets/7a70e34105dd41f1892afd988c20d11d765b2242.avif";
import mvcGameplay from "@/assets/2594e08f7210f5595396a9de1f6dbb05743deca2.avif";
import wolverineImg from "@/assets/7e5dceaaeb3830181863148045b38a4824757ed2.webp";
import captainAmericaImg from "@/assets/d685788d346be2d3b5b5d317fc04793caa478b4a.webp";
import spiderManImg from "@/assets/544ddfa50858e2eb26a310934e220e4074d38dae.webp";
import hulkImg from "@/assets/d72ea3446bd4fa842f79724fd551e3470cf1e0f3.webp";
import venomImg from "@/assets/0cf596c4e3be2dc9ed8b70bd8301ca207bb06c3f.webp";
import gambitImg from "@/assets/5173f961f585a96e67a8ed3751140986afedf5ac.webp";
import warMachineImg from "@/assets/3f39d8bccdb8ecca5206d1898f767e549b08cb39.webp";
import highSpeedVenomImg from "@/assets/f80b277448c3c05ceb395eefbbb39f632455119b.gif";
import hyperArmorWarMachineImg from "@/assets/e40c7532b7362370960986442eb59c8c912d9817.webp";
import ryuImg from "@/assets/5d463dc8e61ff2295a81250f8e7c6ac482d8cb19.webp";
import chunLiImg from "@/assets/844f5508ccf105da5fd9caa7ed4cbca77d08a949.webp";

// VMU
import vmuWhite from "@/assets/83175d039473c9cbd9df8c74318bf20f31a1fa84.avif";
import vmuColors from "@/assets/585d6225207b725054889ca5298e33b72a2f97bd.avif";

// Accessories
import jumpPack from "@/assets/1cd261bdfed6ef7a6b3900140b37da6d379dec26.avif";
import dreamcastKeyboard from "@/assets/e69f0c1ce9d1d8e97819f430d46fba5597dfcb87.avif";
import dreamcastMouse from "@/assets/2e5b24e30f2511ba4ec21362bc2c0c8f0497486e.avif";
import microphone from "@/assets/34194e1bc47b1ea0d190170032969331109ca2f9.avif";
import fishingController from "@/assets/8d17e01b95fab35162115c7ab8f71d30fcfdbd38.avif";
import arcadeStick from "@/assets/464962d62fcc4e3dbd97abe1f0ab3f690b77a87d.avif";
import dreamcastController from "@/assets/3e6e900ff2a44ba1cd3d884dd19c9659ee01adf5.avif";
import vmuMemoryCard from "@/assets/3099fc50c771c9c18ee8bd70b8c35d8f2bda6a07.avif";

// SegaNet
import seganetLogo from "@/assets/6e51564737d5d2dd517998a1a3501c38aa2cc0ae.avif";
import webBrowser from "@/assets/8399f815caa0b9228012a26cb556b4992ab74a8d.avif";
import seganetAd from "@/assets/393616de0dc61f825b2f4b247cd7967c406eb944.webp";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  // Dreamcast Console
  { id: "dc-1", src: dreamcastConsole, title: "Dreamcast Console", category: "Console", aspectRatio: "landscape" },
  { id: "dc-2", src: dreamcastBox, title: "Dreamcast Packaging", category: "Console", aspectRatio: "square" },
  { id: "dc-3", src: dreamcastLogo, title: "Dreamcast Logo", category: "Console", aspectRatio: "landscape" },

  // Sonic Adventure
  { id: "sonic-1", src: sonicFrontCover, title: "Sonic Adventure - Front Cover", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-2", src: sonicBackCover, title: "Sonic Adventure - Back Cover", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-3", src: sonicDisc, title: "Sonic Adventure - Game Disc", category: "Sonic Adventure", aspectRatio: "square" },
  { id: "sonic-4", src: sonicCharacter, title: "Sonic the Hedgehog", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-5", src: tailsCharacter, title: "Tails Character", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-6", src: knucklesCharacter, title: "Knuckles Character", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-7", src: amyCharacter, title: "Amy Rose Character", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-8", src: bigCharacter, title: "Big the Cat", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-9", src: gammaCharacter, title: "E-102 Gamma", category: "Sonic Adventure", aspectRatio: "portrait" },
  { id: "sonic-10", src: sonicMontage, title: "Character Montage", category: "Sonic Adventure", aspectRatio: "landscape" },
  { id: "sonic-11", src: sonicGameplay, title: "Gameplay Screenshot", category: "Sonic Adventure", aspectRatio: "landscape" },
  { id: "sonic-12", src: sonicVMU, title: "VMU Screenshot", category: "Sonic Adventure", aspectRatio: "square" },

  // Tony Hawk's Pro Skater 2
  { id: "tony-1", src: tonyFrontCover, title: "Tony Hawk's Pro Skater 2 - Front Cover", category: "Tony Hawk's Pro Skater 2", aspectRatio: "portrait" },
  { id: "tony-2", src: tonyBackCover, title: "Tony Hawk's Pro Skater 2 - Back Cover", category: "Tony Hawk's Pro Skater 2", aspectRatio: "portrait" },
  { id: "tony-3", src: tonyDisc, title: "Tony Hawk's Pro Skater 2 - Disc", category: "Tony Hawk's Pro Skater 2", aspectRatio: "square" },
  { id: "tony-4", src: tonyAerial, title: "Tony Hawk Aerial Trick", category: "Tony Hawk's Pro Skater 2", aspectRatio: "landscape" },
  { id: "tony-5", src: tonyLoading, title: "Loading Screen", category: "Tony Hawk's Pro Skater 2", aspectRatio: "landscape" },
  { id: "tony-6", src: tonyGameplay, title: "Gameplay Screenshot", category: "Tony Hawk's Pro Skater 2", aspectRatio: "landscape" },

  // Jet Set Radio
  { id: "jsr-1", src: jsrFrontCover, title: "Jet Set Radio - Front Cover", category: "Jet Set Radio", aspectRatio: "portrait" },
  { id: "jsr-2", src: jsrBackCover, title: "Jet Set Radio - Back Cover", category: "Jet Set Radio", aspectRatio: "portrait" },
  { id: "jsr-3", src: jsrDisc, title: "Jet Set Radio - Disc", category: "Jet Set Radio", aspectRatio: "square" },
  { id: "jsr-4", src: jsrCharacterAction, title: "Character in Action", category: "Jet Set Radio", aspectRatio: "landscape" },
  { id: "jsr-5", src: jsrCharacterLineup, title: "Character Lineup", category: "Jet Set Radio", aspectRatio: "landscape" },
  { id: "jsr-6", src: jsrCharacterGroup, title: "Character Group Shot", category: "Jet Set Radio", aspectRatio: "landscape" },

  // Marvel vs. Capcom
  { id: "mvc-1", src: mvcFrontCover, title: "Marvel vs. Capcom - Front Cover", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-2", src: mvcBackCover, title: "Marvel vs. Capcom - Back Cover", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-3", src: mvcCharacterSelect, title: "Character Select Screen", category: "Marvel vs. Capcom", aspectRatio: "landscape" },
  { id: "mvc-4", src: mvcPosterArt, title: "Poster Art", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-5", src: mvcGameplay, title: "Gameplay Screenshot", category: "Marvel vs. Capcom", aspectRatio: "landscape" },
  { id: "mvc-6", src: wolverineImg, title: "Wolverine", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-7", src: captainAmericaImg, title: "Captain America", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-8", src: spiderManImg, title: "Spider-Man", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-9", src: hulkImg, title: "Hulk", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-10", src: venomImg, title: "Venom", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-11", src: gambitImg, title: "Gambit", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-12", src: warMachineImg, title: "War Machine", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-13", src: highSpeedVenomImg, title: "High-Speed Venom", category: "Marvel vs. Capcom", aspectRatio: "square" },
  { id: "mvc-14", src: hyperArmorWarMachineImg, title: "Hyper Armor War Machine", category: "Marvel vs. Capcom", aspectRatio: "square" },
  { id: "mvc-15", src: ryuImg, title: "Ryu", category: "Marvel vs. Capcom", aspectRatio: "portrait" },
  { id: "mvc-16", src: chunLiImg, title: "Chun-Li", category: "Marvel vs. Capcom", aspectRatio: "portrait" },

  // VMU
  { id: "vmu-1", src: vmuWhite, title: "VMU White", category: "VMU", aspectRatio: "square" },
  { id: "vmu-2", src: vmuColors, title: "VMU Color Variants", category: "VMU", aspectRatio: "landscape" },

  // Accessories
  { id: "acc-1", src: dreamcastController, title: "Dreamcast Controller", category: "Accessories", aspectRatio: "landscape" },
  { id: "acc-2", src: vmuMemoryCard, title: "VMU Memory Card", category: "Accessories", aspectRatio: "square" },
  { id: "acc-3", src: jumpPack, title: "Jump Pack", category: "Accessories", aspectRatio: "square" },
  { id: "acc-4", src: dreamcastKeyboard, title: "Dreamcast Keyboard", category: "Accessories", aspectRatio: "landscape" },
  { id: "acc-5", src: dreamcastMouse, title: "Dreamcast Mouse", category: "Accessories", aspectRatio: "square" },
  { id: "acc-6", src: microphone, title: "Microphone", category: "Accessories", aspectRatio: "portrait" },
  { id: "acc-7", src: fishingController, title: "Fishing Controller", category: "Accessories", aspectRatio: "portrait" },
  { id: "acc-8", src: arcadeStick, title: "Arcade Stick", category: "Accessories", aspectRatio: "landscape" },

  // SegaNet
  { id: "net-1", src: seganetLogo, title: "SegaNet Logo", category: "SegaNet", aspectRatio: "landscape" },
  { id: "net-2", src: webBrowser, title: "Web Browser", category: "SegaNet", aspectRatio: "landscape" },
  { id: "net-3", src: seganetAd, title: "SegaNet Advertisement", category: "SegaNet", aspectRatio: "landscape" },
];

const categories = ["All", "Console", "Sonic Adventure", "Tony Hawk's Pro Skater 2", "Jet Set Radio", "Marvel vs. Capcom", "VMU", "Accessories", "SegaNet"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex = direction === "prev"
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const getGridColumnSpan = (aspectRatio?: string) => {
    if (aspectRatio === "landscape") return "md:col-span-2";
    return "md:col-span-1";
  };

  const getGridRowSpan = (aspectRatio?: string) => {
    if (aspectRatio === "portrait") return "md:row-span-2";
    return "md:row-span-1";
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <GlobalHeader activePage="Gallery" contextText="Explore the visual legacy of Dreamcast." />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: "600",
              color: "#1D1D1F",
              letterSpacing: "-0.02em",
              lineHeight: "1.1"
            }}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-12"
            style={{ color: "#6E6E73" }}
          >
            A visual journey through the Dreamcast universe.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: selectedCategory === category ? "#F97308" : "#F5F5F7",
                  color: selectedCategory === category ? "#FFFFFF" : "#1D1D1F",
                  border: selectedCategory === category ? "none" : "1px solid #D2D2D7",
                  fontWeight: selectedCategory === category ? "500" : "400"
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getGridColumnSpan(image.aspectRatio)} ${getGridRowSpan(image.aspectRatio)}`}
                onClick={() => openLightbox(image)}
                style={{
                  backgroundColor: "#F5F5F7"
                }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
                      <p className="text-white/80 text-xs">{image.category}</p>
                    </div>
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Dreamcast Orange accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: "#F97308" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl" style={{ color: "#6E6E73" }}>
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-medium text-lg mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {selectedImage.category} • {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <GameFooter />
    </div>
  );
}
