import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Linkedin, Star, Clock, ArrowRight, Sparkles, Mail } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511954582945?text=Olá%20Dra.%20Jéssica%20Leite,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica.";
const INSTAGRAM_LINK = "https://www.instagram.com/dra.jessicaleite?igsh=dmQzeWx0aDc3eGN5";
const LINKEDIN_LINK = "https://www.linkedin.com/in/jéssica-leite-a897771a1";

// Helper to resolve asset paths correctly
const ASSET_VERSION = "v20_final";

const getAssetPath = (path: string) => {
  // Use absolute paths from root for custom domain reliability
  const pathWithoutQuery = path.split('?')[0];
  const cleanPath = pathWithoutQuery.startsWith('/') ? pathWithoutQuery : `/${pathWithoutQuery}`;
  
  return `${cleanPath}?v=${ASSET_VERSION}`;
};

// Log for device verification
console.log(`Dra Jessica Leite Website - Build ${ASSET_VERSION} (Absolute Paths)`);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [showOrtodontiaAfter, setShowOrtodontiaAfter] = useState(false);
  const [showRestauracaoAfter, setShowRestauracaoAfter] = useState(false);

  return (
    <div className="min-h-screen bg-cream overflow-hidden selection:bg-gold selection:text-navy font-sans">
      {/* Fixed Background Elements (Letterhead Style) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <img src={getAssetPath("user_uploads/logo.jpeg")} alt="" className="w-[80%] max-w-2xl object-contain mix-blend-multiply" />
        </div>
      </div>

      {/* Header (Letterhead Style) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/5">
        <div className="h-1.5 bg-navy w-full"></div>
        <div className="max-w-7xl mx-auto py-4 px-6 flex flex-col items-center justify-center text-center">
          <img src={getAssetPath("user_uploads/logo.jpeg")} alt="Logo JL" className="h-12 w-12 md:h-14 md:w-14 object-contain mix-blend-multiply mb-1" />
          <h1 className="font-display text-2xl md:text-3xl tracking-[0.2em] text-navy font-medium">DRA. JÉSSICA LEITE</h1>
          <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-navy/60 uppercase font-medium mt-0.5">CIRURGIÃ-DENTISTA</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-56 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cream">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${getAssetPath("user_uploads/8.jpeg")}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/40 to-cream"></div>
        </div>

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy/15 backdrop-blur-xl border border-navy/20 mb-8 shadow-md">
              <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-navy">Odontologia de Excelência em Santo André</span>
            </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-navy leading-[1.1] tracking-tight mb-8">
            A Arte de Sorrir com <span className="italic text-gold">Confiança.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-navy/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Tratamentos odontológicos completos com foco em saúde, estética e bem-estar. Tecnologia moderna e atendimento humanizado.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded-full text-base font-semibold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agende sua Avaliação <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Authority Marquee */}
      <section className="py-8 border-y border-navy/5 bg-navy/[0.02] overflow-hidden flex">
        <div className="flex animate-marquee items-center gap-16 px-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex text-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-lg font-display font-medium text-navy">Referência em Saúde & Bem-estar Oral</span>
              </div>
              <span className="text-navy/20 text-2xl">•</span>
              <span className="text-lg font-display font-medium text-navy/70">Atendimento Humanizado</span>
              <span className="text-navy/20 text-2xl">•</span>
              <span className="text-lg font-display font-medium text-navy/70">Tecnologia Moderna</span>
              <span className="text-navy/20 text-2xl">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais (Bento Grid) */}
      <section id="especialidades" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-navy mb-4">Especialidades <span className="italic text-gold">Premium</span></h2>
          <p className="text-navy/60 max-w-xl text-lg font-light">Protocolos avançados para restaurar a função e a estética do seu sorriso com precisão absoluta.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1: Implantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-[2.5rem] relative overflow-hidden group flex flex-col min-h-[520px]"
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/17.jpeg")} alt="Implantes Dentários e Protocolo" loading="lazy" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Implantes & Protocolo</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Recupere a segurança ao mastigar e sorrir com implantes de alta durabilidade e estética natural.</p>
            </div>
          </motion.div>

          {/* Item 2: Facetas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-[2.5rem] relative overflow-hidden group flex flex-col min-h-[520px]"
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/facetas.jpeg")} alt="Facetas em Resina" loading="lazy" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Facetas em Resina</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Transformação estética rápida e minimamente invasiva para um sorriso alinhado.</p>
            </div>
          </motion.div>

          {/* Item 3: Clareamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-[2.5rem] relative overflow-hidden group flex flex-col min-h-[520px]"
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/clareamento.jpeg")} alt="Clareamento Dental Profissional" loading="lazy" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Clareamento</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Um sorriso mais branco, iluminado e com aspecto saudável através de técnicas seguras.</p>
            </div>
          </motion.div>

          {/* Item 4: Ortodontia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass rounded-[2.5rem] relative overflow-hidden cursor-pointer flex flex-col min-h-[520px] group"
            onClick={() => setShowOrtodontiaAfter(!showOrtodontiaAfter)}
            onMouseEnter={() => setShowOrtodontiaAfter(true)}
            onMouseLeave={() => setShowOrtodontiaAfter(false)}
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/ortodontia-antes.jpeg")} alt="Resultado Ortodontia - Antes" loading="lazy" className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${showOrtodontiaAfter ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`} />
              <img src={getAssetPath("user_uploads/ortodontia-depois.jpeg")} alt="Resultado Ortodontia - Depois" loading="lazy" className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${showOrtodontiaAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
              <div className={`absolute top-6 right-6 z-20 bg-navy/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-navy/10 text-xs font-medium text-navy/80 transition-opacity duration-500 ${showOrtodontiaAfter ? 'opacity-0' : 'opacity-100'}`}>Antes</div>
              <div className={`absolute top-6 right-6 z-20 bg-gold backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/20 text-xs font-bold text-navy transition-opacity duration-500 shadow-lg ${showOrtodontiaAfter ? 'opacity-100' : 'opacity-0'}`}>Depois ✨</div>
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Ortodontia</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Opções estéticas e convencionais para o alinhamento perfeito e funcional dos seus dentes.</p>
            </div>
          </motion.div>

          {/* Item 5: Profilaxia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass rounded-[2.5rem] relative overflow-hidden group flex flex-col min-h-[520px]"
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/profilaxia.jpeg")} alt="Profilaxia e Limpeza Dental" loading="lazy" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Profilaxia</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Limpeza dental profunda e preventiva para manutenção da sua saúde bucal a longo prazo.</p>
            </div>
          </motion.div>

          {/* Item 6: Restauração */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass rounded-[2.5rem] relative overflow-hidden cursor-pointer flex flex-col min-h-[520px] group"
            onClick={() => setShowRestauracaoAfter(!showRestauracaoAfter)}
            onMouseEnter={() => setShowRestauracaoAfter(true)}
            onMouseLeave={() => setShowRestauracaoAfter(false)}
          >
            <div className="relative h-[280px] bg-white/30 overflow-hidden">
              <img src={getAssetPath("user_uploads/restauracao-antes.jpeg")} alt="Restauração Dental - Antes" loading="lazy" className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${showRestauracaoAfter ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`} />
              <img src={getAssetPath("user_uploads/restauracao-depois.jpeg")} alt="Restauração Dental - Depois" loading="lazy" className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${showRestauracaoAfter ? 'opacity-80 scale-100' : 'opacity-0 scale-110'}`} />
              <div className={`absolute top-6 right-6 z-20 bg-navy/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-navy/10 text-xs font-medium text-navy/80 transition-opacity duration-500 ${showRestauracaoAfter ? 'opacity-0' : 'opacity-100'}`}>Antes</div>
              <div className={`absolute top-6 right-6 z-20 bg-gold backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/20 text-xs font-bold text-navy transition-opacity duration-500 shadow-lg ${showRestauracaoAfter ? 'opacity-100' : 'opacity-0'}`}>Depois ✨</div>
            </div>
            <div className="p-10 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
              <h3 className="text-3xl font-display font-medium text-navy mb-3">Restauração</h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">Devolvendo a forma e a função dos dentes danificados com materiais estéticos avançados.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-32 px-6 bg-navy/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-navy/10">
              <img src={getAssetPath("user_uploads/8.jpeg")} alt="Dra. Jéssica Leite" loading="lazy" className="w-full h-full object-cover opacity-80 object-top" title="Dra. Jéssica Leite" />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-medium text-gold mb-1">Saúde</div>
              <div className="text-sm text-navy/70 font-medium">Integral & Bem-estar</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-navy mb-2">Dra. Jéssica Leite</h2>
            <div 
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold font-medium mb-6 text-sm tracking-wide notranslate" 
              translate="no"
              style={{ unicodeBidi: 'isolate', fontVariantNumeric: 'tabular-nums' }}
              aria-label="CROSP 171.286"
            >
              C&#8203;R&#8203;O&#8203;S&#8203;P 171.286
            </div>
            <p className="text-lg text-navy/60 mb-6 leading-relaxed font-light">
              A Clínica Odontológica Jéssica Leite, localizada no coração do Jardim em Santo André, é especializada em oferecer tratamentos odontológicos completos com foco absoluto em saúde, estética e bem-estar.
            </p>
            <p className="text-lg text-navy/60 mb-10 leading-relaxed font-light">
              Atuamos com tecnologia moderna e atendimento humanizado, proporcionando uma experiência confortável e resultados que transformam vidas através do sorriso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-navy font-medium mb-1">Localização Premium</h4>
                  <p className="text-sm text-navy/40 font-light">R. das Figueiras, 1244 - Jardim, Santo André - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-navy font-medium mb-1">Horário</h4>
                  <p className="text-sm text-navy/40 font-light">Segunda a Sexta: 07:00 às 22:00</p>
                  <p className="text-sm text-navy/40 font-light">Sábado: 08:00 às 16:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-navy mb-4">O que dizem nossos <span className="italic text-gold">pacientes</span></h2>
          <p className="text-navy/60 max-w-xl mx-auto text-lg font-light">Histórias reais de sorrisos transformados em nossa clínica.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alexandre Sousa", text: "Profissional excelente, extremamente atenciosa e cuidadosa aos detalhes, referência absoluta no que faz, além de estar super bem alocada em uma das melhores regiões do ABC." },
            { name: "Antonio Felipe", text: "Excelente profissional! A Dra. Jéssica é muito atenciosa, cuidadosa e passa muita confiança. Recomendo! 🦷✨" },
            { name: "Gabriel Messias", text: "Um Ambiente muito agradável e aconchegante, atendimento excelente da Dra. e uma recepção Incrível, Super Recomendo!" }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-3xl relative"
            >
              <div className="flex text-gold mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-navy/70 mb-8 text-lg leading-relaxed font-light italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="font-medium text-navy">{testimonial.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-navy mb-4">Como <span className="italic text-gold">Chegar</span></h2>
          <p className="text-navy/60 max-w-xl mx-auto font-light">Venha nos visitar em nosso consultório no coração do Jardim em Santo André.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-3xl overflow-hidden glass p-2"
        >
          <iframe
            src="https://maps.google.com/maps?q=R.%20das%20Figueiras,%201244%20-%20Jardim,%20Santo%20Andr%C3%A9%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      </main>

      {/* Footer */}
      <footer id="contato" className="bg-cream pt-32 pb-16 px-6 border-t border-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-12 lg:p-16 border border-white/60 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-navy rounded-2xl p-1 shadow-xl">
                    <img src={getAssetPath("user_uploads/logo.jpeg")} alt="Logo JL" className="h-16 w-16 object-contain mix-blend-screen" />
                  </div>
                  <div>
                    <div className="font-display font-medium text-2xl tracking-[0.1em] text-navy">
                      DRA. JÉSSICA LEITE
                    </div>
                    <div className="text-[10px] tracking-[0.3em] text-gold uppercase font-bold">Odontologia Premium</div>
                  </div>
                </div>
                <p className="text-navy/60 max-w-md mb-10 text-lg font-light leading-relaxed">
                  Transformando sorrisos com excelência, tecnologia de ponta e um atendimento humanizado no coração de Santo André.
                </p>
                <div className="flex gap-5">
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 lg:pl-12">
                <h4 className="text-navy font-display text-xl font-medium mb-8 flex items-center gap-2">
                  <span className="w-8 h-px bg-gold/30"></span>
                  Contato
                </h4>
                <ul className="space-y-6">
                  <li>
                    <a href="tel:11954582945" className="group flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="text-navy/70 group-hover:text-gold transition-colors font-light">(11) 95458-2945</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:drajessicaleiteodontologia@gmail.com" className="group flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-navy/70 group-hover:text-gold transition-colors font-light break-all">drajessicaleiteodontologia@gmail.com</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-navy/70 font-light leading-relaxed">Rua das Figueiras, 1244 - sala 3 interfone 3<br />Jardim, Santo André - SP</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 lg:pl-8">
                <h4 className="text-navy font-display text-xl font-medium mb-8 flex items-center gap-2">
                  <span className="w-8 h-px bg-gold/30"></span>
                  Horário
                </h4>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-gold/20">
                    <p className="text-xs text-navy/40 uppercase tracking-widest mb-1 font-bold">Segunda a Sexta</p>
                    <p className="text-navy font-medium text-lg">07:00 às 22:00</p>
                  </div>
                  <div className="relative pl-6 border-l border-gold/20">
                    <p className="text-xs text-navy/40 uppercase tracking-widest mb-1 font-bold">Sábado</p>
                    <p className="text-navy font-medium text-lg">08:00 às 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-navy/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-navy/30 font-light tracking-wide">
            <p>&copy; 2026 Clínica Odontológica Dra. Jéssica Leite. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <span className="hover:text-navy transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-navy transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}
