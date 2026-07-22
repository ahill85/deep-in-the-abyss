/**
 * Optional deep content for archive topics, keyed by exact topic title.
 * Every topic page renders fine without an entry here — these add
 * background chapters and extra point-by-point comparisons.
 */
export type TopicDetail = { intro: string[]; points: { title: string; they: string; record: string }[] };

export const details: Record<string, TopicDetail> = {
  "The Ice Wall": {
    intro: [
      "In flat-earth cosmology, Antarctica is not a continent but a ring: a towering wall of ice encircling the disc of the world, holding the oceans in. The 1959 Antarctic Treaty—which reserves the continent for science and bans military activity—is recast as the mechanism that keeps ordinary people from ever reaching the edge.",
      "The idea descends from 19th-century flat-earth writer Samuel Rowbotham, who needed something to stop the seas draining off his disc. The southern ice, then barely explored, was the obvious candidate—and the less mapped a place is, the more comfortably a theory can live there. Antarctica in 2026 is considerably better mapped than it was in 1849.",
    ],
    points: [
      { title: "Can anyone actually go?", they: "Independent travel is blocked; the treaty powers guard the wall and turn back private expeditions.", record: "Some 100,000+ tourists visit Antarctica in a season, private expeditions ski to the pole, commercial flights cross it, and its 17,968 km coastline is circumnavigated and satellite-mapped in full." },
      { title: "The treaty's purpose", they: "Why would every rival government agree about one landmass unless something needed hiding?", record: "The treaty text is public: it demilitarizes the continent, freezes territorial claims, and mandates open inspection—rival nations' bases inspect each other, which is the opposite of a shared secret." },
    ],
  },
  "Hollow Earth": {
    intro: [
      "The idea that our planet is a shell—with inner suns, oceans, even civilizations—has a surprisingly distinguished pedigree: Edmond Halley proposed nested spheres in 1692 to explain compass anomalies. By the 19th century, John Cleves Symmes Jr. was campaigning for an expedition to the polar openings; by the 20th, the theory had absorbed Agartha, secret Nazi refuges, and UFO bases.",
      "Its persistence is easy to understand: the deepest hole ever drilled, the Kola Superdeep Borehole, reached about 12 km—0.2% of the way to the centre. Nobody has been down there. But not being able to visit a place is not the same as knowing nothing about it.",
    ],
    points: [
      { title: "What earthquakes reveal", they: "No one has seen the interior—the 'molten core' is just a model.", record: "Seismic waves from every large earthquake pass through the planet and are recorded worldwide; their travel times and shadow zones map a solid inner core, liquid outer core, and dense mantle with no cavity. A hollow shell would produce unmistakably different signals—and could not generate Earth's measured gravity or magnetic field." },
      { title: "The polar openings", they: "Early explorers and satellite images show dark holes at the poles.", record: "Both poles are overflown routinely and photographed daily by weather satellites; the famous 'hole' images are data-gap artifacts from polar-orbit mosaics, acknowledged as such by the agencies that published them." },
    ],
  },
  "Bigfoot": {
    intro: [
      "The modern legend begins in 1958, when enormous footprints appeared around a California logging site and a newspaper coined 'Bigfoot.' In 1967 came the Patterson–Gimlin film: a few seconds of a walking, ape-like figure at Bluff Creek that remain the most argued-over frames in cryptozoology.",
      "After the 1958 track-maker's death, his family produced the carved wooden feet and described decades of hoaxing; Bob Heironimus swore he wore a suit for the 1967 film, which Patterson's camp always denied. Meanwhile, thousands of sighting reports continue across North America—concentrated, skeptics note, in the same regions as bear populations.",
    ],
    points: [
      { title: "The DNA era", they: "Hair, tracks, and eyewitnesses across two centuries can't all be bears and hoaxes.", record: "A 2014 Oxford-led study sequenced 30 'sasquatch' hair samples: bears, horses, dogs, humans. No submitted sample has ever yielded unknown primate DNA—a test any genuine specimen would pass instantly." },
      { title: "The trail-camera problem", they: "It's a rare, intelligent animal avoiding cameras in vast wilderness.", record: "Tens of millions of trail cameras now blanket North America, documenting every known large mammal including the rarest—wolverines, jaguars crossing the border—yet none has produced a clear sasquatch. A breeding population leaves bodies, bones, and roadkill; none exists." },
    ],
  },
  "Loch Ness Monster": {
    intro: [
      "A 1933 road along the loch's shore, a monster-movie summer, and a newspaper retainer produced the modern Nessie. The following year the 'surgeon's photograph' gave the story its icon—a slender neck rising from dark water—until 1994, when the last surviving conspirator confirmed it was a toy submarine with a putty head.",
      "The loch itself keeps the mystery breathing: 36 km long, peat-black at depth, and genuinely imposing. Sonar contacts and wakes are regularly reported, and a webcam community watches year-round.",
    ],
    points: [
      { title: "Environmental DNA", they: "Sonar keeps finding large moving targets that fit no known resident.", record: "The 2018 international eDNA survey sampled the whole water column and catalogued every species shedding DNA into the loch: no reptile, no sturgeon, no unknown large animal—but a very large amount of eel DNA, reviving the giant-eel reading of many sightings." },
      { title: "A breeding population's arithmetic", they: "A relict plesiosaur line could survive in a deep, cold loch.", record: "The loch froze solid under glaciers 10,000 years ago and connects to the sea only by shallow river; a plesiosaur colony would need dozens of animals surfacing to breathe constantly, in front of the most-watched water in Scotland." },
    ],
  },
  "Bermuda Triangle": {
    intro: [
      "The triangle was drawn in 1964 by a pulp-magazine writer connecting Flight 19, the USS Cyclops, and other losses between Miami, Bermuda, and San Juan. Charles Berlitz's 1974 bestseller made it a global legend; Larry Kusche's 1975 rebuttal, which re-checked every case against weather reports and inquiry files, quietly dismantled it.",
      "Kusche found accidents relocated into the triangle, calm seas that were actually storms, and ships that sank in documented weather—but rebuttals rarely outsell mysteries.",
    ],
    points: [
      { title: "The loss rate", they: "Too many ships and planes vanish there for coincidence.", record: "Lloyd's of London and the US Coast Guard both state the region's loss rate is unremarkable for its traffic—one of the busiest sea and air corridors on Earth, crossed by cruise ships and airliners thousands of times daily without incident." },
      { title: "The famous cases", they: "Flight 19's compasses failed; the Cyclops sent no distress call.", record: "Flight 19's radio traffic records a leader's navigation error until fuel exhaustion at night; the Cyclops sailed overloaded into a probable storm in 1918, one of many pre-radio-era losses. Each 'unexplainable' case thins under its own paperwork." },
    ],
  },
  "Area 51": {
    intro: [
      "For decades the U.S. government wouldn't even say the name. The dry lakebed at Groom Lake, Nevada, hosted the U-2, the A-12 Oxcart, and stealth prototypes—programs so secret that strange lights and impossible speeds were, in fact, being seen over the desert. The CIA finally acknowledged the base by name in declassified documents in 2013.",
      "Bob Lazar's 1989 television claims—nine captured saucers at 'S-4'—fused the real secrecy with the UFO age, and Area 51 became shorthand for everything hidden.",
    ],
    points: [
      { title: "What the secrecy protected", they: "You don't guard empty desert with deadly force for weather balloons.", record: "Declassified program files document exactly what was guarded: espionage aircraft whose existence was worth concealing from the Soviets. The declassification timeline matches the sighting waves—U-2 tests began the same summer 'flying disc' reports spiked along its flight paths." },
      { title: "The S-4 story", they: "Lazar described element 115 and reactor physics years ahead of science.", record: "Moscovium was synthesized in 2003 and exists for milliseconds—nothing like Lazar's stable fuel; the universities he names have no record of him, and 35 years of leaks from real black programs have never corroborated S-4." },
    ],
  },
  "Denver Airport": {
    intro: [
      "Denver International opened in 1995—16 months late, $2 billion over budget, with a 32-foot blue mustang sculpture that killed its own creator, apocalyptic-looking murals, a Masonic dedication capstone mentioning a 'New World Airport Commission,' and an enormous underground baggage system that never worked. Conspiracy culture did the rest.",
      "The airport now leans into the joke with gargoyle installations and 'Illuminati headquarters' ad campaigns—either disarming good humor or exactly what they'd want you to think.",
    ],
    points: [
      { title: "The murals", they: "Gas-masked soldiers and burning cities are elite predictive programming in plain sight.", record: "Artist Leo Tanguma has explained the two-part cycle for decades: documented anti-war, anti-genocide panels that resolve into peace imagery; his same style hangs in schools and community centers." },
      { title: "The tunnels", they: "Five buried buildings and miles of tunnels hide a continuity-of-government bunker.", record: "The tunnels housed the famous automated-baggage failure and now carry ordinary baggage trains; journalists have toured them repeatedly. The 'buried buildings' were construction misalignments used for storage." },
    ],
  },
  "Illuminati": {
    intro: [
      "The real Illuminati lasted eleven years. Founded in Bavaria in 1776 by law professor Adam Weishaupt to promote Enlightenment values inside a censorious state, it was infiltrated, banned, and dissolved by 1787—its papers seized and published, which is why historians know it so well.",
      "The modern all-powerful Illuminati was substantially reborn in the 1960s–70s through the Discordian 'Operation Mindfuck' and the Illuminatus! novels—deliberate satire that seeded the tropes pop culture now treats as ancient: the pyramid, the eye, the hand signs, the celebrity members.",
    ],
    points: [
      { title: "Survival after 1787", they: "A society built on secrecy would fake its own death first.", record: "The order's internal correspondence was captured and printed by the Bavarian government; members were publicly punished and its networks dispersed. Two centuries of historians have found no continuation—only revivals borrowing the name." },
      { title: "The symbols", they: "The eye and pyramid on the dollar bill mark Illuminati control of America.", record: "The Great Seal's design predates any Illuminati association in American sources; the eye of providence was common Christian iconography across 18th-century Europe, and the seal's designers documented their classical sources." },
    ],
  },
  "MKUltra": {
    intro: [
      "This one is true. From 1953 the CIA ran a mind-control research program—LSD given to unwitting Americans, hypnosis, sensory deprivation, 'psychic driving' experiments on psychiatric patients in Montreal—through front foundations at universities and hospitals across North America.",
      "CIA director Richard Helms ordered the files destroyed in 1973; a financial-records cache survived to fuel the 1975 Church Committee hearings and a 1977 Senate investigation. Victims included Frank Olson, who died falling from a hotel window days after being dosed—his family's settlement and the government's apology are on the record.",
    ],
    points: [
      { title: "How far it went", they: "The destroyed files hid successful mind control—programmed assassins included.", record: "Surviving records and testimony document real abuse and real damage but consistent failure at actual 'mind control'; the program was judged scientifically worthless even internally. The destruction of files means the full scope is genuinely unknowable—a fact both sides correctly cite." },
      { title: "The lesson", they: "If they did this, the wilder programs are plausible too.", record: "MKUltra is the strongest card in any argument from institutional distrust—which is precisely why documented cases matter more than speculative ones: it shows what real conspiracies look like when exposed—paper trails, hearings, settlements." },
    ],
  },
  "9/11 controlled demolition": {
    intro: [
      "The controlled-demolition claim centers on three collapses: the Twin Towers and, most argued, 7 World Trade Center—a 47-storey building not hit by a plane that fell symmetrically at 5:20 p.m. The National Institute of Standards and Technology spent years on each investigation, concluding impact damage and unfought fires brought down the towers, and that WTC 7 was the first tall building known to collapse primarily from fire.",
      "A community of architects and engineers continues to dispute the WTC 7 model and to cite free-fall acceleration during part of its collapse—which NIST acknowledges—while the broader engineering profession accepts the investigations' findings.",
    ],
    points: [
      { title: "The physical evidence", they: "Symmetrical collapse at free-fall speed, molten metal, and thermite residue in the dust point to demolition.", record: "NIST documents progressive structural failure consistent with the videos; the 'thermite' paper appeared in a pay-to-publish journal and its red-gray chips match primer paint; verified free-fall occurred for ~2.25 seconds after buckling began—consistent with the fire-induced model." },
      { title: "The logistics", they: "Rigging three towers secretly is no harder to believe than the official story.", record: "Controlled demolition requires weeks of open access, kilometres of detcord, and charges that survive impact and fire while thousands work in the buildings; no rigging evidence, contractor, or whistleblower has surfaced in two decades of litigation and FOIA releases." },
    ],
  },
  "Chemtrails": {
    intro: [
      "Aircraft have painted lines across the sky since the 1940s—bomber formations in WWII photographs trail them for miles. The chemtrail claim, born in the late 1990s, holds that some trails are deliberate spraying: aluminum and barium for weather control, population control, or geoengineering.",
      "The theory's kernel of plausibility is real: solar-geoengineering research does exist, openly, in journals and small field experiments—which is different from a decades-long secret global spraying operation visible from every backyard.",
    ],
    points: [
      { title: "Why trails persist", they: "Normal contrails vanish in seconds; the lingering grids are something else.", record: "Contrail persistence depends on humidity and temperature at altitude—the same physics as natural cirrus; on moist days trails spread into sheets, on dry days they vanish. This was documented decades before the theory existed." },
      { title: "The samples", they: "Rain and soil tests show spiking aluminum under flight paths.", record: "A 2016 survey of 77 atmospheric scientists found none who had encountered evidence of secret spraying; cited samples reflect ordinary crustal dust and flawed collection methods. Aluminum is the third most abundant element in Earth's crust." },
    ],
  },
  "Mermaids": {
    intro: [
      "Half-human beings of the water appear in Assyrian myth, Greek sirens, African Mami Wata, Japanese ningyo, and a thousand sailors' tales. Columbus reported three off Hispaniola in 1493—'not half as beautiful as they are painted'—almost certainly manatees, whose order is named Sirenia for exactly this reason.",
      "In 2012 and 2013, Animal Planet aired 'Mermaids: The Body Found' and its sequel—docufiction with actors playing scientists. The films were labelled as fiction, drew millions of viewers, and generated so many earnest inquiries that NOAA published a statement: no evidence of aquatic humanoids has ever been found.",
    ],
    points: [
      { title: "The universality argument", they: "Unconnected cultures describing the same being suggests a real one.", record: "The described beings differ wildly—fish-tailed maidens, bird-sirens, water spirits—unified mostly by later art; what cultures share is coastlines, marine mammals seen at distance, and storytellers. Universal myths (dragons, giants) track universal experiences, not universal creatures." },
      { title: "The aquatic ape angle", they: "Human aquatic adaptations hint our lineage split, with one branch returning to the sea.", record: "The aquatic-ape hypothesis is rejected by mainstream paleoanthropology, and no marine hominid fossil exists; every human ancestor fossil sits on land, alongside the full record of marine mammals—which shows what sea-adapted mammals actually become." },
    ],
  },
  "Dragons": {
    intro: [
      "Serpents of chaos in Mesopotamia, treasure-hoarding wyrms in northern Europe, rain-bringing lung in China, feathered Quetzalcoatl in Mesoamerica: no mythic creature is as universal as the dragon. That universality is the mystery worth explaining—and several honest explanations compete.",
      "Fossils are the classic candidate: dinosaur bones in China were sold as 'dragon bones' into the 20th century, and protoceratops skulls have been proposed as griffin-lore seeds. Anthropologist David E. Jones argued for something deeper—an inherited primate alarm-template of snake, raptor, and big cat fused into one super-predator.",
    ],
    points: [
      { title: "Shared memory of real animals?", they: "Cultures that never met describe the same beast—maybe surviving megafauna, even late dinosaurs.", record: "The dragons differ in everything but 'large serpent'—wings here, no wings there, breath of fire or rain; humans and non-avian dinosaurs miss each other by 66 million years, and no dragon remains have ever been found. Crocodiles, pythons, monitor lizards, and fossils were available everywhere as raw material." },
      { title: "The fire-breathing detail", they: "Fire-breath is too specific and too widespread to be invented independently.", record: "Fire-breath is largely a European and late development—absent from most Asian and American dragons—and folklore routinely arms monsters with the scariest local element. No biological mechanism for it exists in any known animal." },
    ],
  },
  "Vampires": {
    intro: [
      "The 18th century had a vampire crisis. In the 1720s–30s, Habsburg officials investigated Serbian villages where exhumed corpses looked 'fed'—flushed, bloated, blood at the lips—and the reports of Peter Blagojević and Arnold Paole became European media sensations, injecting the word 'vampire' into English and French.",
      "The panic was real; the observations were even real. What was missing was forensic science: bodies decompose exactly as the horrified villagers described, with bloating, blood purge, receding gums exposing 'grown' teeth, and groans when staked.",
    ],
    points: [
      { title: "The exhumation evidence", they: "Officials and doctors signed reports of undecayed, blood-filled corpses.", record: "Every described sign is standard decomposition, temperature-dependent and wildly variable between graves—which is why some corpses looked 'normal' and others 'vampiric.' Modern forensics reproduces the entire checklist." },
      { title: "Disease at the root", they: "Something real was killing the villages—the vampire was their name for it.", record: "Correct—epidemic tuberculosis and other contagions swept households sequentially, looking exactly like a dead relative 'draining' the family; New England's 19th-century consumption-vampire exhumations (Mercy Brown, 1892) document the same logic." },
    ],
  },
  "Ancient aliens": {
    intro: [
      "The idea that visitors built or inspired the ancient world was popularized by Erich von Däniken's 'Chariots of the Gods?' (1968) and now sustains an entire television ecosystem. Its evidence base is a tour of genuine wonders—pyramids, Nazca, Puma Punku, the Antikythera mechanism—each presented as beyond the people who made it.",
      "Archaeology's response is not just debunking but documentation: quarries with half-cut blocks, tool marks, worker villages with bakeries and medical care, practice pieces, and written logistics like the Merer papyri, which record hauling limestone to Giza.",
    ],
    points: [
      { title: "The capability gap", they: "Precision granite work and megalithic transport exceed bronze-age tools.", record: "Experimental archaeology closes each cited gap: dolerite pounders and sand-abrasion cut granite; teams have moved and raised multi-ton stones with ropes, sledges, and levers; the 'impossible' precision falls within measured capabilities of patient skilled labor." },
      { title: "What the theory costs", they: "It honors the ancients by taking their achievements seriously.", record: "It does the opposite—systematically transferring credit from African, American, and Asian civilizations to hypothetical visitors, a pattern critics note rarely gets applied to Greek or Roman engineering." },
    ],
  },
  "Shroud of Turin": {
    intro: [
      "A fourteen-foot linen bearing the faint front-and-back image of a crucified man, the Shroud surfaces in the historical record at Lirey, France in the 1350s—where the local bishop reported an artist had confessed to making it. Six centuries later it remains the most scientifically examined religious object on Earth, and the argument is genuinely unfinished.",
      "In 1988, three independent laboratories radiocarbon-dated samples to 1260–1390 CE. Shroud researchers have since attacked the sampling (a repaired corner?), the statistics, and possible contamination—while no one has convincingly explained how the image itself was formed, by a medieval artist or anyone else.",
    ],
    points: [
      { title: "The carbon dating", they: "The 1988 sample came from a medieval repair patch; fire damage and handling skewed the count.", record: "The three labs agreed closely, and textile experts dispute the invisible-reweave claim; a 2019 reanalysis of raw data found statistical heterogeneity worth noting but not a medieval-date reversal. No later peer-reviewed dating has been permitted." },
      { title: "The image itself", they: "A photonegative, 3D-encoded image with no pigment penetrating the fibres—beyond medieval technique and still unreproduced.", record: "Researchers have produced comparable superficial images with medieval-available methods (bas-relief scorching, acid pigments), though none matches every property at once; 'unexplained image' and '14th-century cloth' can both be true." },
    ],
  },
  "Voynich Manuscript": {
    intro: [
      "Two hundred forty vellum pages of looping, unreadable script, illustrated with plants that match no species, naked figures in green pools, and elaborate star-charts. Carbon-dated to 1404–1438, owned by emperors and alchemists, and now at Yale's Beinecke Library—fully scanned and free to read, if only anyone could.",
      "Every few years a decipherment makes headlines—Hebrew, proto-Romance, Turkic, medieval abortion manual—and every one has collapsed under expert review. Statistical analyses split: the text's word-structure looks language-like in some measures, hoax-like in others.",
    ],
    points: [
      { title: "Lost language or cipher", they: "The text's Zipf-law statistics and consistent 'grammar' mean real content—possibly a lost language or unbroken cipher.", record: "Its statistics are genuinely language-like in places but violate expectations in others (rigid word structure, position-dependent characters); modern cryptography that breaks Enigma-class systems has failed here, which fits either an exotic system—or no content at all." },
      { title: "The hoax reading", they: "Too much labor for a fraud—30,000 words of consistent script on expensive vellum.", record: "Researchers have shown Cardan-grille-style generation can reproduce Voynich-like text at speed, and a 15th-century imperial buyer reportedly paid 600 ducats—ample motive; consistency proves method, not meaning." },
    ],
  },
  "Oak Island": {
    intro: [
      "In 1795, three boys allegedly found a depression under a ship's tackle block on a Nova Scotia island and started digging. Two centuries, six deaths, and millions of dollars later, the 'Money Pit' has consumed fortunes—Franklin Roosevelt invested as a young man—and now sustains a long-running television series still digging on camera.",
      "The foundational details—oak platforms every ten feet, an inscribed cipher stone promising two million pounds, booby-trap flood tunnels—all come from accounts written decades after the fact; the stone itself vanished around 1919.",
    ],
    points: [
      { title: "The flood tunnels", they: "Engineered box drains at Smith's Cove flood every shaft—someone protected something important.", record: "Geologists note the island sits on karst limestone riddled with natural voids and sea-connected channels; the 'engineered' drains have never been conclusively traced to the pit, and modern excavation of the cove found 19th-century searcher works." },
      { title: "Two centuries of finds", they: "Roman swords, Templar crosses, parchment scraps, and old coins keep surfacing.", record: "The dramatic artifacts are unprovenanced or debunked (the 'Roman sword' was a modern replica); the verified finds—coconut fibre, old wood, searcher debris—are consistent with colonial-era activity and 200 years of previous digs. No treasure has ever appeared." },
    ],
  },
  "D. B. Cooper": {
    intro: [
      "On Thanksgiving eve 1971, a man in a dark suit hijacked a Boeing 727 between Portland and Seattle with a briefcase 'bomb,' collected $200,000 and four parachutes, ordered the plane toward Mexico, and stepped off the rear airstair into a rainstorm over the Washington wilderness. He has never been identified.",
      "In 1980 a boy found $5,800 of the ransom, degraded and still banded, on a Columbia River beach—the case's only physical development. The FBI closed the file in 2016 after 45 years; amateur sleuths, DNA hopes, and a rotating cast of deathbed confessions keep it warm.",
    ],
    points: [
      { title: "Did he survive?", they: "A skydiver clever enough to demand four chutes doesn't die on one jump—he walked away laughing.", record: "He jumped at night, in freezing rain, in loafers and a trench coat, with a dummy training chute among his gear, into rough terrain; the FBI's operating theory was non-survival, and none of the money ever entered circulation." },
      { title: "The suspects", they: "One of the named men—Rackstraw, McCoy, List—was Cooper, and the Bureau knew.", record: "Every prominent suspect has been excluded or unsupported: McCoy's copycat hijacking differed in method and his family alibied Thanksgiving; tie-clip DNA and 2020s particle analyses have narrowed profiles without matching anyone." },
    ],
  },
  "Amelia Earhart": {
    intro: [
      "On 2 July 1937, Earhart and navigator Fred Noonan vanished near tiny Howland Island during the Pacific leg of their round-the-world flight. Her final radio calls to the cutter Itasca—'we must be on you but cannot see you… gas is running low'—document a crew unable to find an island with no working radio direction-finding.",
      "The Navy's conclusion was fuel exhaustion and ditching at sea. The chief rival, championed by TIGHAR, is that they landed on Gardner Island (Nikumaroro), where a 1940 skeleton—since lost—was measured; a 2018 re-analysis argued the bones matched Earhart better than 99% of reference individuals.",
    ],
    points: [
      { title: "Nikumaroro", they: "The bones, a sextant box, improvised tools, American-made artifacts, and post-loss radio calls point to castaways.", record: "The bones are lost and the re-analysis is contested; the artifacts are ambiguous colonial-era items; many 'post-loss' signals were hoaxes or misidentifications—though a subset remains hard to dismiss. Multiple deep-sea searches of both areas have found no aircraft." },
      { title: "Japanese capture", they: "Islanders saw a crashed plane and captured fliers; a photo shows them on a Marshall Islands dock.", record: "The famous photo was found in a Japanese travel book published in 1935—two years before the flight; no Japanese record, POW file, or credible witness chain supports capture, in an archive-rich occupation era." },
    ],
  },
  "Paul is dead": {
    intro: [
      "In autumn 1969 an Iowa student paper and a Detroit radio call-in ignited the perfect pop conspiracy: Paul McCartney had died in a 1966 car crash and been replaced by a lookalike—with the Beatles confessing through hidden clues. Abbey Road's 'funeral procession' cover, 'I buried Paul' in Strawberry Fields, backmasked messages: the hunt became a global parlor game.",
      "Paul, alive on his Scottish farm, gave a Life magazine interview headlined 'Paul is still with us.' The clues had answers—he said 'cranberry sauce,' the barefoot walk was a hot day—but the episode became the template for every hidden-message hunt since.",
    ],
    points: [
      { title: "The clues", they: "Dozens of aligned details across albums can't be accidental—the band planted a confession.", record: "Each clue predates the theory's frame or has documented mundane origin; with thousands of images and lyrics to mine, pattern-hunting guarantees hits. The band spent decades bemused, and no crash record exists." },
      { title: "The replacement", they: "Post-66 Paul differs in height and face—forensic analyses said different man.", record: "The cited 'forensic' study was an entertainment-TV segment; continuous documentation—family, bandmates, session tapes, six more decades of performances—makes a secret swap the least parsimonious explanation in pop history." },
    ],
  },
  "Planet X / Nibiru": {
    intro: [
      "Zecharia Sitchin's readings of Sumerian tablets produced Nibiru: a planet on a 3,600-year orbit whose returns shaped human history. Nancy Lieder's channeled warnings attached a date—2003, then 2012, then rolling ever forward—and each pass of doom found a new audience.",
      "Meanwhile, actual astronomy has its own outer-planet hunt: 'Planet Nine,' inferred from clustered orbits of distant Kuiper-belt objects—a hypothesis under active search, hundreds of times Earth's distance from the Sun, with no doomsday attached.",
    ],
    points: [
      { title: "Could it hide?", they: "A dim brown dwarf on a long ellipse could evade detection until it's close.", record: "An inbound planet-sized body months from Earth would be naked-eye visible and trivially imaged by millions of amateurs; infrared sky surveys (WISE) have excluded Saturn-size bodies to 10,000 AU. Nothing that big can sneak up." },
      { title: "The Sumerian source", they: "The tablets describe twelve planets and the Anunnaki's world.", record: "Assyriologists uniformly reject Sitchin's translations; 'Nibiru' in the sources is a term for a crossing point associated with Jupiter, and Mesopotamian astronomy texts—well understood—contain no trans-Plutonian planet." },
    ],
  },
  "Mandela Effect": {
    intro: [
      "Paranormal researcher Fiona Broome coined the term after discovering she—and many others—'remembered' Nelson Mandela dying in prison in the 1980s. He died in 2013, a free man and former president. The catalogue has grown famous: the Berenstain Bears (not Berenstein), 'Luke, I am your father' (never said), the Monopoly man's monocle (none), Shazaam, the Sinbad genie movie (never made).",
      "For some, these shared errors are evidence of merging timelines or CERN-adjacent reality shifts. For memory science, they're a gift: natural experiments in how reconstruction, gist, and social reinforcement build confident false memories at scale.",
    ],
    points: [
      { title: "Timeline residue", they: "Identical false memories in millions of strangers need a shared cause—like a changed past.", record: "They have one: shared schemas. '-stein' is the common surname suffix; monocles fit top-hat iconography; misquotes compress scenes into clearer lines; Sinbad hosted a genie-adjacent movie block in the 90s. Errors cluster exactly where memory theory predicts." },
      { title: "The physical traces", they: "Old VHS tapes and print artifacts show the 'other' versions.", record: "Examined artifacts resolve to parodies, licensed knockoffs, and misprints; no verified pre-change original has ever surfaced—precisely the item a real timeline shift would leave everywhere." },
    ],
  },
  "HAARP weather control": {
    intro: [
      "The High-frequency Active Auroral Research Program near Gakona, Alaska, is a phased array of 180 antennas that heats small patches of the ionosphere to study radio propagation—useful for communications and navigation research. Since the 1990s it has been blamed for hurricanes, earthquakes, floods, mind control, and the odd mass bird death.",
      "The Air Force transferred the facility to the University of Alaska Fairbanks in 2015; it now runs open houses, publishes its experiment schedule, and sells observation time to scientists.",
    ],
    points: [
      { title: "The energy problem", they: "Gigawatts focused on the atmosphere can steer jet streams and trigger quakes.", record: "HAARP's effective radiated power is ~3.6 MW into a region 100+ km up—millions of times weaker than the solar energy driving weather, which happens in the troposphere far below the ionosphere; no coupling mechanism to earthquakes exists in physics." },
      { title: "The secrecy", they: "A military-born facility in remote Alaska isn't studying radios.", record: "The site's research is published, its schedule is public, and academics worldwide use it; military interest in ionospheric radio (over-the-horizon communication) is documented and mundane." },
    ],
  },
  "Wow! signal": {
    intro: [
      "On 15 August 1977, Ohio State's Big Ear telescope recorded a 72-second narrowband burst at 1420 MHz—the hydrogen line, exactly where SETI theorists suggested civilizations might transmit. Astronomer Jerry Ehman circled the printout and wrote 'Wow!'; the name stuck.",
      "The signal has never repeated despite hundreds of follow-up observations of the same sky. It remains the strongest unexplained candidate in SETI history—and a single unrepeated event, which science can neither verify nor dismiss.",
    ],
    points: [
      { title: "Alien transmission", they: "Narrowband, at the hydrogen line, matching predicted beacon design—everything an ET signal should be.", record: "It also matches what strong terrestrial interference or a rare natural maser-like emission could produce; without repetition there is no way to test between them. 'Unexplained' is the honest label—not 'confirmed.'" },
      { title: "The comet explanation", they: "A 2017 paper pinned it on hydrogen clouds around comets.", record: "The comet hypothesis was widely criticized on frequency and position grounds and has not been accepted; the mystery genuinely stands." },
    ],
  },
  "Missing 411": {
    intro: [
      "Former lawman David Paulides has built a publishing and film franchise on cases of people vanishing in wild places under 'impossible' circumstances—clustered near boulder fields and berry patches, clothes removed, dogs that won't track, children found miles uphill.",
      "Search-and-rescue professionals recognize the details differently: paradoxical undressing in hypothermia, scent washed out by weather, lost-person behavior models in which small children travel farther than intuition expects.",
    ],
    points: [
      { title: "The clusters", they: "Disappearances concentrate in specific parks with repeating profile details—something is selecting victims.", record: "Clusters track visitation density and hazardous terrain; the 'profile points' are common enough (water, weather, granite) to fit almost any case. Statistical review finds disappearance rates consistent with exposure risk—and Paulides declines to state any mechanism." },
      { title: "The withheld data", they: "The Park Service keeps no missing-persons list—because the numbers would terrify.", record: "The NPS historically lacked a centralized database (a real records failure since improved); case files themselves are public-record accessible, and independent tallies match ordinary misadventure profiles." },
    ],
  },
  "Skinwalker Ranch": {
    intro: [
      "A 512-acre Utah ranch adjoining Ute tribal land carries decades of stories: orbs, cattle mutilations, portals, and creatures—supercharged when businessman Robert Bigelow bought it in 1996 and installed his National Institute for Discovery Science. Bigelow's Pentagon connection later channeled real federal money (AAWSAP, ~$22M) partly toward the ranch's phenomena.",
      "Sold again in 2016, the ranch is now the set of a long-running reality series in which anomalies are perpetually almost confirmed. The declassified questions—why the Pentagon funded this—are documented; verified anomalies are not.",
    ],
    points: [
      { title: "The evidence base", they: "Decades of witnesses—scientists among them—can't all be wrong about the same field.", record: "NIDS's own researchers reported never capturing data that survived scrutiny; the phenomena famously 'avoided' instruments. Televised evidence—rock temperature spikes, GPS glitches, transient signals—has ambient explanations and no independent replication." },
      { title: "The federal interest", they: "The government doesn't spend millions on nothing.", record: "The AAWSAP contract is real and its award to Bigelow's organization—amid personal connections to the program's Senate patron—is exactly the kind of documented, mundane explanation the record favors." },
    ],
  },
  "Dead Internet theory": {
    intro: [
      "Born on forums around 2021, the theory claims the internet 'died' years earlier: organic human activity has been largely replaced by bots and algorithmically generated content, curated to manipulate. The strong version adds intent—a coordinated effort to manage perception at scale.",
      "It has aged unusually well in one respect: bot-traffic studies now put automated activity near half of all web traffic, and generative AI floods platforms with synthetic text, images, and engagement farming. The measurable trend and the conspiratorial frame are different claims, though.",
    ],
    points: [
      { title: "The observable half", they: "Feeds feel samey, engagement is inorganic, and identical replies swarm every post—the bots are visible.", record: "Measurably true and openly studied: bot networks, content farms, and AI slop are documented industry problems platforms fight and profit from simultaneously. No conspiracy is needed for incentives this aligned." },
      { title: "The strong claim", they: "Most 'people' online aren't people, and it's coordinated.", record: "Usage data, traffic audits, and the sheer payroll of humans visibly posting undercut the majority-bots claim; coordination exists in pockets (state influence ops are documented) without a single steering hand." },
    ],
  },
  "The Zodiac ciphers": {
    intro: [
      "The Zodiac killer murdered at least five people in Northern California in 1968–69 and mailed taunting letters with four ciphers. Z408 was cracked in a week by a schoolteacher couple; Z340 resisted everything for 51 years—until December 2020, when three amateur codebreakers (a software developer, a mathematician, and a warehouse worker) solved its transposition scheme. The FBI confirmed it.",
      "The solved text taunts—'I am not afraid of the gas chamber'—and contains no name. Two short ciphers, Z13 ('my name is—') and Z32, remain unsolved and are likely too short for any solution to be provable.",
    ],
    points: [
      { title: "A name in the codes", they: "Z13 literally begins 'my name is'—crack it and close the case.", record: "Thirteen characters admit thousands of consistent readings; cryptographers consider it unsolvable in principle without external confirmation. The 2020 Z340 solution shows what real breaks look like: verifiable, mechanical, and nameless." },
      { title: "The case itself", they: "Authorities know who it was—suspect files stay sealed.", record: "The prime suspect died in 1992 with DNA comparisons since inconclusive or negative; the case remains officially open in multiple jurisdictions, with partial-DNA hopes pinned on preserved envelopes." },
    ],
  },
  "Havana syndrome": {
    intro: [
      "Beginning in 2016, US diplomats and intelligence officers in Havana—then Guangzhou, Vienna, and elsewhere—reported sudden pressure, piercing sound, vertigo, and lasting cognitive symptoms. The injuries ended careers; the cause became a geopolitical argument.",
      "A 2020 National Academies report judged directed pulsed radio-frequency energy a plausible mechanism. In 2023, US intelligence agencies assessed a foreign energy weapon 'very unlikely,' favoring preexisting conditions, conventional illness, and stress. In 2024, investigative reporting revived the weapon thesis with alleged links to a Russian unit—contested immediately.",
    ],
    points: [
      { title: "The weapon thesis", they: "Clustered onset at spy-heavy posts, a plausible RF mechanism, and GRU fingerprints—this was an attack.", record: "The intelligence community's own review found no actor, no device, and no forensic signature across hundreds of cases—though its confidence levels varied and dissent exists inside the agencies. NIH imaging found no consistent brain injury." },
      { title: "The mundane reading", they: "Crickets and stress don't end careers with measurable vestibular damage.", record: "The recorded Havana sound matched a cricket species; mass psychogenic spread explains case waves without impugning any individual's genuine symptoms. Some cases resist every mundane account—the honest state of an unfinished file." },
    ],
  },
  "Cicada 3301": {
    intro: [
      "In January 2012, an anonymous 4chan post offered a test 'to find highly intelligent individuals.' The trail that followed spanned steganography in images, Mayan numerology, Anglo-Saxon runes, a Cicada-marked poster in a dozen cities worldwide, Tor hidden services, and an unpublished libertarian-crypto text called Liber Primus. Annual puzzles ran through 2014; most of Liber Primus remains undeciphered.",
      "Claimed insiders describe a private group focused on cryptography and information freedom; theories run from NSA recruitment to a cult. Nothing has ever been confirmed—including whether the game is over.",
    ],
    points: [
      { title: "Intelligence recruitment", they: "The global physical footprint and operational security scream state agency.", record: "Agencies run recruitment puzzles openly (GCHQ's are branded); a coordinated hobbyist collective with cryptocurrency-era skills explains the footprint equally well, and alleged member accounts describe exactly that." },
      { title: "The unsolved book", they: "Liber Primus hides the organization's location and purpose.", record: "Its solved pages contain philosophy, not coordinates; the community consensus is that remaining sections await a key or method—or test patience by design." },
    ],
  },
  "The Max Headroom incident": {
    intro: [
      "On the night of 22 November 1987, Chicago television was hijacked twice: a silent 28 seconds during a sportscast on WGN, then 90 surreal seconds during Doctor Who on WTTW—a man in a Max Headroom mask ranting, humming, and being spanked with a flyswatter before the signal cut.",
      "Overpowering a station's studio-to-transmitter link requires directional equipment, power, and know-how. The FCC investigated; no one was ever charged. Decades of internet sleuthing has produced suspects and retractions, but broadcast piracy's strangest crime remains unsolved.",
    ],
    points: [
      { title: "An inside job?", they: "Only a broadcast engineer could aim that equipment—someone in the industry knows.", record: "Investigators agreed the intruders needed technical skill and likely line-of-sight to the transmitters; disgruntled-insider is the leading theory precisely because it requires no exotic capability. The trail is simply cold." },
      { title: "Why it matters", they: "If two stations fall in one night, broadcast was never secure.", record: "Stations hardened links afterward, and the incident became a case study; its enduring fame owes less to menace than to how perfectly 90 unexplained seconds resist closure." },
    ],
  },
  "Numbers stations": {
    intro: [
      "Tune shortwave in the right places and you can still hear them: synthesized voices reading digit groups, interval melodies like the Lincolnshire Poacher, the buzz of Russia's UVB-76. For decades governments refused all comment while enthusiasts logged schedules and named the stations.",
      "Espionage trials ended the ambiguity: the Cuban Five and the Ana Montes case documented one-time-pad messages received from Cuban station HM01-style broadcasts. One-way voice links remain genuinely secure—unbreakable if pads are used properly, and receivable by anyone with a $20 radio, which is the point.",
    ],
    points: [
      { title: "Still active?", they: "The Cold War ended; the stations should be museums.", record: "Logged schedules show ongoing activity from multiple countries; old tradecraft persists exactly because it defeats modern traffic analysis—no internet trail, no metadata, no way to identify the receiver." },
      { title: "The eerie ones", they: "UVB-76's decades of buzzing hide doomsday triggers.", record: "The buzzer marks a kept channel with occasional voice messages consistent with military readiness networks; 'dead hand' attributions are speculation layered on a mundane—if wonderfully creepy—channel marker." },
    ],
  },
  "Project Stargate": {
    intro: [
      "For over twenty years, US intelligence funded remote viewing—psychics tasked against Soviet sites, hostages, and lost aircraft—under names ending with STARGATE at Fort Meade. The program's existence, its star viewers, and its tasking logs are all declassified; the CIA's reading room hosts thousands of session records.",
      "The 1995 evaluation that closed the program split its reviewers: statistician Jessica Utts argued laboratory effects were real and unexplained; psychologist Ray Hyman found the evidence unpersuasive and the operational record useless. Congress moved on; the files remain.",
    ],
    points: [
      { title: "The hits", they: "Viewers sketched a Soviet submarine facility and located a downed plane—documented successes.", record: "Celebrated hits sit beside voluminous misses in the same files; assessments found intelligence value 'vague and inclusive,' never actionable alone, with hit rates inflated by generous scoring. The full record—both sides' favorite sessions—is public." },
      { title: "Why it ran so long", they: "Twenty years of funding means twenty years of results.", record: "Documents show Cold War anxiety—the Soviets funded psychic research too—plus institutional momentum; programs also persist because canceling them requires someone to own the decision." },
    ],
  },
  "Nostradamus": {
    intro: [
      "Michel de Nostredame, a 16th-century French physician and astrologer, published nearly a thousand four-line prophecies deliberately scrambled in time, language, and reference. He has been credited—always afterward—with predicting the Great Fire of London, Napoleon, Hitler, and September 11.",
      "The 'Hister' quatrains name a Latin term for the lower Danube; the famous 9/11 verses circulated online within hours of the attacks and were fabrications. No documented case exists of a quatrain identifying an event before it occurred.",
    ],
    points: [
      { title: "The hit list", they: "Too many matches across centuries for vague verse—'Hister' alone is uncanny.", record: "Retrofitting works on any large corpus of ambiguous text; 'Hister' as Danube fits the verse's geography naturally. Prospective tests—asking interpreters to predict with quatrains—have never succeeded." },
      { title: "The man himself", they: "A genuine seer encoding visions against censorship.", record: "His almanacs' dated predictions failed routinely in his own lifetime; contemporaries published rebuttals. His genius was durable ambiguity—verse built to fit futures, which is why every century refits it." },
    ],
  },
  "The firmament dome": {
    intro: [
      "In the flat-earth model, the sky is not empty space but a solid dome—the biblical 'firmament'—sealing the disc like a snow globe. Stars are lights fixed to its inner surface; rockets that seem to reach orbit are said to arc back down after 'hitting' the barrier.",
      "The image draws on ancient Near Eastern cosmology, which genuinely imagined a solid vault over a flat earth. Reviving it in 2026 means explaining away seventy years of objects that demonstrably left and returned through the sky in every direction.",
    ],
    points: [
      { title: "The rockets that 'curve back'", they: "Launch footage shows rockets bending over, as if deflecting off the dome.", record: "The arc is a gravity turn—a deliberate, published trajectory that trades vertical climb for orbital speed; thousands of satellites now circle continuously, and reentry capsules pass down through the same sky a dome would block." },
      { title: "What's above us", they: "No one has ever touched space; it's a projection on the vault.", record: "Space stations are visible to the naked eye crossing the sky, tracked by amateurs worldwide; interplanetary probes have left Earth entirely and sent back images of it shrinking to a dot—impossible under a sealed dome." },
    ],
  },
  "Simulation theory": {
    intro: [
      "The idea that reality is a computer simulation was sharpened by philosopher Nick Bostrom's 2003 trilemma: either civilizations go extinct before building ancestor-simulations, or advanced civilizations choose not to, or we are almost certainly living in one. Elon Musk and others have popularized the strongest version.",
      "It is a serious philosophical argument, not a scientific finding. Its central problem is testability: a sufficiently good simulation would, by definition, be indistinguishable from base reality from the inside.",
    ],
    points: [
      { title: "The 'glitches'", they: "Déjà vu, quantum weirdness, and the pixel-like Planck length are rendering artifacts.", record: "Each cited 'glitch' has a physics explanation predating the theory; quantum mechanics is strange but consistent, and the Planck scale is a limit of measurement, not evidence of pixels. No anomaly points specifically to computation." },
      { title: "Can it be tested?", they: "Physicists could find the simulation's underlying grid or rounding errors.", record: "Some have proposed lattice-QCD signatures, but any result is explicable within physics, and a competent simulator could patch detectable seams. The hypothesis is currently unfalsifiable—which keeps it philosophy, not science." },
    ],
  },
  "Tunguska event": {
    intro: [
      "On 30 June 1908, an explosion over the Podkamennaya Tunguska River in Siberia flattened an estimated 80 million trees across 2,000 square kilometres—the largest impact event in recorded history. Because the region was remote, the first scientific expedition did not arrive until 1927.",
      "That expedition, led by Leonid Kulik, found no crater—which fed a century of exotic theories, from a crashing UFO to a Tesla death-ray to a mini black hole. The mainstream reading is an asteroid or comet fragment exploding in the air.",
    ],
    points: [
      { title: "The missing crater", they: "A real impact leaves a hole; the absence means something stranger—antimatter, a UFO, a black hole.", record: "An airburst several kilometres up flattens forest radially without cratering—exactly the butterfly-wing tree-fall pattern found; the 2013 Chelyabinsk airburst was photographed doing the same on a smaller scale." },
      { title: "The exotic candidates", they: "Antimatter or a micro black hole would explain the energy and the empty ground.", record: "A black hole would have punched out the far side of the Earth; antimatter would leave a radiation signature that isn't there. Microscopic meteoritic particles and airburst modelling fit an ordinary cosmic body." },
    ],
  },
  "Water fluoridation": {
    intro: [
      "Adding fluoride to public water to prevent tooth decay began in Grand Rapids, Michigan in 1945 and spread across much of the world. It has drawn opposition since the 1950s—Cold War fears of communist mind-control, and enduring claims of hidden neurological harm.",
      "Here the record is genuinely layered: the anti-decay benefit at regulated levels is well established, while legitimate scientific debate continues over optimal dosage and possible effects at higher exposures.",
    ],
    points: [
      { title: "Is it mass medication?", they: "Dosing an entire population without consent hides known harms behind 'dental health.'", record: "Decades of studies show reduced cavities at ~0.7 mg/L; major reviews find no credible link to the dramatic harms claimed. Consent and medical-ethics objections are a real policy debate—distinct from the mind-control framing." },
      { title: "The neurotoxicity claim", they: "Studies link fluoride to lowered IQ in children.", record: "The cited studies involve much higher natural fluoride levels (often 2–4×) than water fluoridation, in areas with other contaminants; at regulated levels the evidence of harm is weak, and agencies continue to monitor the dosage question openly." },
    ],
  },
  "Rendlesham Forest": {
    intro: [
      "Over three nights in December 1980, US airmen stationed at RAF Woodbridge in Suffolk reported strange lights in Rendlesham Forest—one deputy commander, Lt. Col. Charles Halt, recorded an audio log and later described a triangular craft leaving indentations and elevated radiation readings. It became 'Britain's Roswell.'",
      "The forest sits beside the Orford Ness lighthouse and lay under a busy airspace; a bright fireball crossed the region that night. The Ministry of Defence found no threat to national security and released its files in the 2000s.",
    ],
    points: [
      { title: "The craft and the marks", they: "Trained military witnesses saw a landed craft; ground traces and radiation confirmed it.", record: "The 'landing marks' matched rabbit diggings, and the radiation readings were near natural background; the pulsing light aligned with the Orford Ness lighthouse on the witnesses' bearing. Accounts also grew more detailed over the years." },
      { title: "Why airmen, though?", they: "You can't fool experienced servicemen with a lighthouse.", record: "Perception at night in dark woods is unreliable even for trained people, and initial reports were far more tentative than later retellings; the MoD, with every security incentive to investigate, found nothing anomalous." },
    ],
  },
  "Phoenix Lights": {
    intro: [
      "On the evening of 13 March 1997, thousands across Arizona reported lights in the sky. What is often merged into one event was actually two: an early formation of lights moving south around 8 p.m., and a separate set of stationary lights near Phoenix around 10 p.m.",
      "The later 10 p.m. lights were traced to flares dropped by Air National Guard A-10s on a training range southwest of the city; the earlier formation is best explained by a squadron of aircraft, though it remains the more debated of the two.",
    ],
    points: [
      { title: "The 10 p.m. lights", they: "A mile-wide craft hovered over Phoenix in front of thousands.", record: "The lights appeared in a line, winked out one by one, and sat exactly where flares dropped behind the Estrella mountains would appear from the city; a later video showed them descending like flares, and the operation was confirmed." },
      { title: "The 8 p.m. formation", they: "A V of lights glided silently overhead too slow to be planes.", record: "Multiple analyses point to high-flying aircraft in formation (a flight of A-10s or similar) catching light; the 'silent and slow' impression is common for high-altitude craft at night. This event is genuinely less tidy—but no craft was ever tracked." },
    ],
  },
  "Betty and Barney Hill": {
    intro: [
      "In September 1961, a New Hampshire couple reported being followed by a light on a night drive, then finding two hours unaccounted for. Under hypnosis with psychiatrist Benjamin Simon in 1964, they recounted an abduction by grey beings—and Betty drew a 'star map' later linked by an amateur to the Zeta Reticuli system.",
      "It became the template for modern abduction lore. The core difficulty is that the detailed narrative emerged through hypnosis, a technique now known to generate confident false memories rather than recover accurate ones.",
    ],
    points: [
      { title: "The star map", they: "Betty's map matches Zeta Reticuli so precisely it must be real.", record: "The match was made by selecting stars to fit the drawing years later; astronomers note the pattern is ambiguous and orientation-dependent, and different star choices fit equally well. It proves pattern-matching, not navigation." },
      { title: "The recovered memory", they: "Two independent witnesses described the same experience under hypnosis.", record: "Simon himself concluded the 'memory' was likely a shared fantasy built from Betty's vivid dreams, which preceded the sessions; hypnosis reliably produces detailed, sincere, and false accounts, and the couple discussed the dreams beforehand." },
    ],
  },
  "Majestic 12": {
    intro: [
      "In 1984 a roll of film arrived anonymously at a UFO researcher's home, containing documents describing 'Majestic 12'—a secret committee of scientists and officials convened by President Truman in 1947 to manage recovered alien craft and bodies.",
      "The papers electrified ufology and have circulated ever since. The FBI investigated and stamped them 'BOGUS'; document analysts found format and signature problems consistent with forgery.",
    ],
    points: [
      { title: "The documents", they: "Named officials, period detail, and classification markings show authentic deep-state records.", record: "The papers use anachronistic date formats and a signature apparently photocopied from a genuine Truman letter; the security markings don't match 1947 conventions. The FBI concluded they were fabricated." },
      { title: "The lack of a paper trail", they: "A program this secret would leave no ordinary records.", record: "No corroborating original has ever surfaced in the vast, repeatedly-mined archives of the era; the documents appear only as anonymously-mailed copies—the hallmark of a hoax, not a leak." },
    ],
  },
  "Project Blue Book": {
    intro: [
      "From 1952 to 1969, the US Air Force ran Project Blue Book, systematically collecting and investigating UFO reports. It logged 12,618 sightings; 701 were classified 'unidentified,' meaning insufficient data to resolve—not confirmed craft.",
      "The program is fully declassified and available to read. Its critics say it was a debunking exercise; its defenders note it took the reports seriously enough to catalogue them for 17 years.",
    ],
    points: [
      { title: "The 701 unknowns", they: "Hundreds of cases the Air Force itself couldn't explain prove something real.", record: "'Unidentified' in Blue Book meant a report lacked enough data to classify—blurry, brief, or single-witness—not that a craft was confirmed; the category is a measure of missing information, not evidence." },
      { title: "Was it a cover-up?", they: "The Condon Report was written to shut the subject down.", record: "The 1968 Condon review concluded further study wasn't scientifically justified, which is contestable—but the underlying case files were preserved and released, letting anyone re-examine them. A genuine cover-up doesn't publish its evidence." },
    ],
  },
  "Men in Black": {
    intro: [
      "The trope of dark-suited agents who visit UFO witnesses to intimidate them into silence traces largely to Albert Bender, who in the 1950s claimed three men in black silenced his flying-saucer group—later expanded by writer Gray Barker into a mythos.",
      "The films made them icons. In the record, the accounts are inconsistent, unverifiable, and grew through retelling and fiction rather than any documented agency.",
    ],
    points: [
      { title: "The visits", they: "Witnesses across decades describe the same menacing figures—too consistent to invent.", record: "Descriptions vary wildly (robotic, foreign, threatening, absurd), which is the signature of a spreading legend; some 'visits' were real people—reporters, hoaxers, or ordinary officials—reinterpreted through the myth." },
      { title: "The agency behind them", they: "A government or non-human group enforces UFO secrecy in person.", record: "No agency, budget line, or credible documentary trace of such a unit exists; the origin is a documented 1950s claim amplified by a writer who later admitted embellishing UFO stories." },
    ],
  },
  "Black Knight satellite": {
    intro: [
      "The 'Black Knight' is said to be an alien satellite orbiting Earth for 13,000 years, evidenced by a famous dark-object photograph, mysterious radio echoes, and Nikola Tesla's 1899 signals—all woven into one story.",
      "In fact these are separate, individually explained threads stitched together decades later. The photo is the strongest single item and has a documented mundane source.",
    ],
    points: [
      { title: "The photograph", they: "A NASA image shows a dark artificial object no one will identify.", record: "The images are from the 1998 STS-88 shuttle mission and show a thermal blanket that floated away during a spacewalk—logged at the time as lost equipment, then photographed drifting." },
      { title: "The ancient signals", they: "Long-delayed radio echoes and Tesla's readings prove a 13,000-year-old craft.", record: "Long-delayed echoes are a known ionospheric and plasma phenomenon; Tesla's signals and 1920s echo experiments have natural explanations. None of the threads connect except in the retelling." },
    ],
  },
  "Face on Mars": {
    intro: [
      "In 1976, a Viking 1 orbiter image of the Cydonia region showed what looked strikingly like a human face staring up from the Martian surface—two kilometres across. It became the centerpiece of claims about a lost Martian civilization.",
      "Later missions with far better cameras returned to Cydonia, and the face dissolved into an ordinary eroded mesa.",
    ],
    points: [
      { title: "The resemblance", they: "The symmetry and features are too precise to be a random hill.", record: "The 1976 image was low-resolution with shadows filling in 'eyes' and a 'mouth'; high-resolution imaging by Mars Global Surveyor (2001) and Mars Express showed a natural, asymmetric mesa. The face was pareidolia plus poor pixels." },
      { title: "The 'city' around it", they: "Nearby 'pyramids' show the face is part of a complex.", record: "The surrounding formations are common wind- and impact-shaped landforms found across Mars; none shows tool marks, right angles at resolution, or any feature distinguishable from natural geology." },
    ],
  },
  "Fermi paradox": {
    intro: [
      "If the galaxy is old and vast, why do we see no signs of other civilizations? Physicist Enrico Fermi's lunchtime question—'Where is everybody?'—frames one of science's real open problems, with dozens of proposed answers.",
      "It is a genuine puzzle, not a claim. The conspiracy-adjacent reading ('they're already here and it's hidden') is only one of many candidate solutions, and the one with no verified evidence.",
    ],
    points: [
      { title: "'They're already here'", they: "The silence is explained—contact is being concealed.", record: "This requires every government, observatory, and amateur astronomer to be either fooled or complicit, with zero verified physical evidence in decades of searching. The mainstream candidates need no such conspiracy." },
      { title: "The real candidates", they: "Absence of aliens means we're being quarantined or deceived.", record: "Serious proposed answers include the rarity of life, the vast distances and timescales, short-lived detectability windows, and our very brief listening history; each is testable in principle and needs no cover story." },
    ],
  },
  "Nazi UFOs and Die Glocke": {
    intro: [
      "The legend holds that Nazi Germany developed antigravity craft—including 'Die Glocke,' a bell-shaped device—and that survivors escaped with the technology to a base in Antarctica or South America.",
      "The story originates almost entirely in postwar fiction and a single 1990s book by Igor Witkowski, sourced to an interview and documents no one else has seen. Captured German aerospace archives are extensive and contain jets, rockets, and ramjets—no saucers.",
    ],
    points: [
      { title: "Die Glocke", they: "A secret bell-shaped antigravity device was tested near the end of the war.", record: "The only source is Witkowski's unverifiable account; no wartime document, blueprint, or physical trace supports it, and its 'physics' matches no known German research the Allies catalogued in detail." },
      { title: "The Antarctic escape", they: "U-boats carried the technology and personnel to a hidden southern base.", record: "The 1947 US Operation Highjump was an ordinary training-and-mapping expedition later mythologized; no base, wreckage, or record of fleeing craft has ever been found on the most-surveyed continent." },
    ],
  },
  "Princess Diana": {
    intro: [
      "Diana, Princess of Wales, died in a Paris car crash on 31 August 1997 alongside Dodi Fayed and driver Henri Paul. Dodi's father, Mohamed Al-Fayed, alleged the crash was an assassination ordered to prevent Diana marrying a Muslim, pointing to a white Fiat, missing CCTV, and an alleged pregnancy.",
      "Two exhaustive inquiries—the French investigation and Britain's Operation Paget, followed by a 2008 inquest—examined every claim. The jury returned 'unlawful killing' due to the grossly negligent driving of Paul and the pursuing paparazzi.",
    ],
    points: [
      { title: "The white Fiat and CCTV", they: "A mystery car clipped the Mercedes and the tunnel cameras were conveniently off.", record: "Paget traced paint and debris to a Fiat Uno and pursued the lead exhaustively without finding foul play; the tunnel had no functioning traffic cameras, an ordinary infrastructure gap, not a wipe." },
      { title: "The pregnancy claim", they: "Diana was pregnant, the motive for silencing her.", record: "The inquest found no medical or forensic evidence of pregnancy; toxicology confirmed driver Henri Paul was well over the drink-drive limit and speeding, which the jury identified as the cause." },
    ],
  },
  "Anastasia Romanov": {
    intro: [
      "After the Bolsheviks executed Tsar Nicholas II and his family in 1918, rumours spread that the youngest daughter, Anastasia, had survived. Several women claimed her identity—most famously Anna Anderson, whose case ran for decades.",
      "The mystery ended with genetics. The family's remains were recovered (most in 1991, the last two children in 2007) and DNA-identified, accounting for everyone.",
    ],
    points: [
      { title: "The survivor claims", they: "Anna Anderson knew intimate palace details—she was Anastasia.", record: "DNA testing after Anderson's death matched her to a Polish factory worker, Franziska Schanzkowska; her 'intimate knowledge' came from years of coaching and public accounts. No claimant's DNA ever matched the Romanovs." },
      { title: "The missing bodies", they: "Two children were unaccounted for in the first grave—proof someone escaped.", record: "The two missing sets of remains, including Anastasia's, were found in a second nearby grave in 2007 and DNA-confirmed; the entire family is now accounted for." },
    ],
  },
  "The lost colony of Roanoke": {
    intro: [
      "In 1587, English colonists settled Roanoke Island off present-day North Carolina. When a supply mission returned in 1590, the settlement stood empty—115 people gone, the only clue the word 'CROATOAN' carved on a post and 'CRO' on a tree.",
      "The carving matched a nearby friendly island (modern Hatteras). Rough seas prevented the relief party from checking, and the colonists' fate has been argued ever since.",
    ],
    points: [
      { title: "The carving", they: "A whole colony vanished without struggle—abduction or massacre.", record: "The colonists had pre-agreed to carve their destination and to add a distress cross if forced; the cross was absent. 'CROATOAN' pointed to a known allied island, suggesting a planned move, not violence." },
      { title: "Where they went", they: "No trace was ever found, so the fate is unknowable.", record: "Archaeology at Hatteras and at a site inland ('Site X') has turned up 16th-century English artifacts amid Native contexts, supporting assimilation with local peoples—though no single settlement has been conclusively confirmed." },
    ],
  },
  "Jack the Ripper's identity": {
    intro: [
      "In 1888, at least five women were murdered in London's Whitechapel by an unidentified killer the press dubbed Jack the Ripper. The case spawned taunting letters (mostly considered hoaxes) and, ever since, a parade of named suspects from a royal prince to the painter Walter Sickert.",
      "No suspect has ever been established beyond dispute. Modern DNA claims on a surviving shawl are contested on provenance and method.",
    ],
    points: [
      { title: "The DNA shawl", they: "Genetic analysis of a victim's shawl fingers Aaron Kosminski.", record: "The shawl's chain of custody is broken, the analysis was published without full peer review, and the mitochondrial match is common in the population; most experts consider it unproven." },
      { title: "The famous suspects", they: "A royal cover-up or a known artist was protected by the establishment.", record: "The royal-conspiracy theory relies on a source who admitted inventing it; each celebrity suspect fails on alibi, timing, or evidence. The case remains genuinely, forensically open." },
    ],
  },
  "The Mary Celeste": {
    intro: [
      "In December 1872, the American brigantine Mary Celeste was found adrift near the Azores—seaworthy, cargo largely intact, but abandoned, her crew and the captain's family never seen again. The story became the archetype of the sea mystery.",
      "Much of what people 'know'—warm meals on the table, a still-burning pipe—was fiction added by a young Arthur Conan Doyle in an 1884 short story. The real evidence points to a deliberate, frightened abandonment.",
    ],
    points: [
      { title: "The untouched meal", they: "Food on the table and no sign of struggle mean the crew vanished mid-bite.", record: "The 'meal on the table' is Conan Doyle's invention; the actual salvage found a wet ship, a missing lifeboat and sextant, and a disordered but not violent scene—consistent with a hasty planned departure." },
      { title: "Why abandon a sound ship", they: "Nothing normal makes a crew flee a safe vessel into open sea.", record: "Leading explanations: a feared explosion from venting alcohol cargo (nine barrels were later found empty), or a faulty pump reading suggesting the ship was sinking; the crew took the boat and were lost, while the ship sailed on." },
    ],
  },
  "Hitler survived": {
    intro: [
      "Despite the documented suicide of Adolf Hitler in his Berlin bunker on 30 April 1945, a persistent legend holds that he escaped—by U-boat to Argentina, or into hiding—while a double died in his place. Declassified FBI files fielding tips fueled the idea.",
      "Soviet forces recovered the bodies; forensic and archival evidence across decades confirms the death.",
    ],
    points: [
      { title: "The escape to Argentina", they: "U-boats reached Argentina and FBI files tracked sightings for years.", record: "The FBI logged and dismissed such tips as it does all leads; no credible sighting was ever substantiated, and the Nazi ratlines that did carry other fugitives left records—none for Hitler." },
      { title: "The body", they: "A double was burned; the remains were never properly identified.", record: "Soviet-held skull and jaw fragments and dental remains were examined by multiple teams and match Hitler's dental records; a 2018 French forensic study of the teeth reaffirmed the identification and cause consistent with cyanide and a gunshot." },
    ],
  },
  "Operation Paperclip": {
    intro: [
      "After World War II, the United States secretly recruited around 1,600 German scientists, engineers, and technicians—including rocket pioneer Wernher von Braun—bringing them to America and, in many cases, sanitizing their Nazi-era records to bypass restrictions.",
      "This one is history, not theory. The program is documented and its files declassified; the debate is moral, not factual.",
    ],
    points: [
      { title: "Did it really happen?", they: "America imported Nazis and hid their pasts.", record: "Confirmed and extensively documented: Paperclip and its successors brought former party members and some implicated in wartime atrocities into US programs, with records altered to smooth their entry. The government has acknowledged it." },
      { title: "What it means", they: "If they did this, every dark-program claim is credible.", record: "Paperclip shows exactly what a proven government secret looks like—paper trails, congressional attention, historians' access. It's the strongest reason to weigh documented cases above speculative ones." },
    ],
  },
  "Yeti": {
    intro: [
      "The 'Abominable Snowman' of Himalayan tradition entered Western imagination via 1920s Everest expeditions reporting giant footprints in the snow. Sherpa folklore describes the yeti as a real mountain animal.",
      "Physical evidence—scalps, hands, hair—has been repeatedly tested, and the results point to known animals.",
    ],
    points: [
      { title: "The relics", they: "Monastery-kept yeti scalps and hands are physical proof.", record: "The famous Khumjung 'scalp' was shown to be molded from a serval-like hide; a 2017 genetic study of nine purported yeti samples identified Asian black bears, brown bears, and a dog." },
      { title: "The footprints", they: "Enormous clear tracks appear high on the snow where nothing should walk.", record: "Sun and refreezing enlarge and distort ordinary animal (often bear) tracks as they melt; the celebrated 1951 Shipton photograph shows a single unrepeatable print with no trail leading to or from it." },
    ],
  },
  "The Kraken": {
    intro: [
      "Norse sailors told of a sea monster vast enough to drag ships under off Norway and Greenland. For centuries the kraken sat between myth and natural history—until the animal behind it was hauled into the light.",
      "This is a case the record largely vindicates: the sailors were describing something real, just smaller and stranger than legend made it.",
    ],
    points: [
      { title: "Was there a real monster?", they: "Ship-sinking descriptions are too vivid to be pure invention.", record: "The giant squid (Architeuthis) is real, reaching ~13 m, with eyes the size of dinner plates; carcasses and, since 2004, live footage confirm it. The colossal squid is larger still. The myth exaggerated a genuine deep-sea animal." },
      { title: "Sinking ships", they: "Only a true leviathan could pull a vessel under.", record: "No squid sinks ships, but a large one thrashing at the surface, plus the fear of the unknown deep, easily seeds legend; giant squid battle sperm whales, whose scarred bodies washed ashore as further 'proof' of monsters." },
    ],
  },
  "Werewolves": {
    intro: [
      "Belief in humans transforming into wolves runs through European history, peaking in the werewolf trials of the 16th and 17th centuries, when people were tortured and executed for the crime of lycanthropy alongside the witch panics.",
      "The record reframes the phenomenon as a mix of judicial cruelty, scapegoating, and medical conditions that supplied vivid raw material.",
    ],
    points: [
      { title: "The trials", they: "Courts documented confessions and killings by werewolves.", record: "The 'confessions' were extracted under torture during moral panics; the accused, like Peter Stumpp (1589), were scapegoats for real crimes or social fears, condemned in the same climate as witch hunts." },
      { title: "The transformations", they: "Consistent accounts of shapeshifting across regions suggest something real.", record: "Rabies (which can cause aggression and biting), the hair-growth disorder hypertrichosis, and ergot-fungus hallucinations plausibly seeded the imagery; folklore did the rest, without any documented transformation." },
    ],
  },
  "Chupacabra": {
    intro: [
      "The 'goat-sucker' emerged in Puerto Rico in 1995: a spined, bipedal creature blamed for draining livestock of blood. Within years it spread across Latin America and into Texas, its description mutating along the way.",
      "The first Puerto Rican description closely matched a monster from the science-fiction film Species, released weeks earlier; the Texas 'chupacabras' bodies have consistent, testable identities.",
    ],
    points: [
      { title: "The bloodless kills", they: "Livestock found drained with two puncture wounds—no ordinary predator does that.", record: "Necropsies show normal predation; carcasses aren't actually drained (blood pools internally after death), and puncture wounds match canine teeth. The 'bloodless' detail comes from untrained observation." },
      { title: "The bodies", they: "Texas ranchers keep shooting strange hairless creatures.", record: "DNA and veterinary exams identify them as coyotes and dogs with severe mange, which strips fur and shrinks features into a gargoyle-like look; the original 1995 sighting tracks a then-current movie monster." },
    ],
  },
  "Mothman": {
    intro: [
      "In 1966–67, residents of Point Pleasant, West Virginia reported a winged, red-eyed creature. When the Silver Bridge collapsed in December 1967, killing 46, the Mothman was retroactively cast as a harbinger—an idea cemented by John Keel's 1975 book and its film adaptation.",
      "The sightings cluster around an old munitions site rich in wildlife, and the omen link postdates the tragedy.",
    ],
    points: [
      { title: "The creature", they: "Dozens saw a giant winged being with glowing red eyes.", record: "Large birds—sandhill cranes (which have red facial patches) or barn owls—startled at night, with eyeshine reflecting headlights, fit the descriptions; the sightings centered on the wildlife-rich 'TNT area.'" },
      { title: "The bridge omen", they: "Mothman appeared before the disaster as a warning.", record: "The Silver Bridge fell from a single fractured eyebar—a documented metal-fatigue failure; the prophetic framing came from Keel's later book, not contemporaneous reports." },
    ],
  },
  "The Jersey Devil": {
    intro: [
      "The New Jersey Pine Barrens have a resident legend: a winged, hooved creature said to be the cursed thirteenth child of 'Mother Leeds.' The story crystallized in colonial times and exploded in a 1909 wave of sightings.",
      "Historians trace the tale to real 18th-century figures and political-religious feuds, with the 1909 flap driven by newspapers and hoaxes.",
    ],
    points: [
      { title: "The origin", they: "A real cursed birth in the 1700s loosed the creature on the Pines.", record: "Folklorists connect 'Mother Leeds' to the Leeds family and Daniel Leeds's almanac feuds with the Quakers, whose imagery of monstrous 'Leeds' offspring was political smear later literalized into a monster." },
      { title: "The 1909 sightings", they: "For a week the Devil terrorized towns and left tracks in snow.", record: "The 1909 wave was fed by sensational newspapers; a showman even displayed a painted kangaroo as the 'captured' Devil. Tracks and sightings evaporated when the press moved on." },
    ],
  },
  "Thunderbirds": {
    intro: [
      "Native American traditions across the continent describe enormous birds, and modern sightings claim living giant birds—sometimes even pterosaurs—over the United States. A famous story describes an 1890 Arizona photograph of cowboys beside a giant winged carcass.",
      "The record finds known large birds, misjudged scale, and a 'photograph' no one has ever produced.",
    ],
    points: [
      { title: "The lost photograph", they: "Everyone remembers a real 1890s photo of men with a giant thunderbird.", record: "The photo is a textbook false memory—widely 'recalled' but never located despite large rewards; the original Tombstone Epitaph story described a creature, with no surviving image. It's a case study in collective misremembering." },
      { title: "Modern sightings", they: "People still report birds with impossible wingspans.", record: "California condors (~3 m wingspan), large herons, and pelicans, seen against empty sky with no scale reference, are routinely overestimated; no oversized-bird specimen or nest has ever been found." },
    ],
  },
  "The Wendigo": {
    intro: [
      "The wendigo is a malevolent spirit of Algonquian-speaking peoples of the northern forests, associated with winter, starvation, and the taboo of cannibalism. It also names a documented culture-bound psychiatric phenomenon, 'wendigo psychosis.'",
      "This is folklore with genuine cultural and clinical weight—not a creature awaiting a trail camera.",
    ],
    points: [
      { title: "Is it a monster?", they: "Encounters describe a real gaunt, antlered predator in the woods.", record: "The antlered pop-culture image is a modern invention (largely from horror media); traditional wendigo lore describes a spirit or a person transformed by greed and cannibalism—a moral and spiritual figure, not a zoological one." },
      { title: "Wendigo psychosis", they: "Reports of people 'turning wendigo' prove something takes them over.", record: "Anthropologists documented a real culture-bound syndrome—an intense fear or compulsion around cannibalism in famine conditions—which is a psychological and cultural phenomenon, studied as such, not evidence of possession." },
    ],
  },
  "Lemuria and Mu": {
    intro: [
      "Lemuria began as a real scientific guess: in 1864, zoologist Philip Sclater proposed a sunken land bridge to explain why lemur fossils appeared in both India and Madagascar. Occultists and, separately, the 'lost continent of Mu' writers then transformed it into a drowned motherland of humanity.",
      "Plate tectonics later explained the biology without any sunken continent, and seafloor mapping shows none exists.",
    ],
    points: [
      { title: "The scientific origin", they: "Even scientists proposed Lemuria—so it was real.", record: "Sclater's land-bridge idea was a reasonable pre-tectonics hypothesis, made obsolete once continental drift explained shared species; he never imagined a lost civilization, which occult writers added later." },
      { title: "The sunken continent", they: "Mu and Lemuria hosted advanced peoples now under the sea.", record: "Ocean-floor surveys reveal basaltic crust and no submerged continental landmass in the Indian or Pacific oceans; continents are made of lighter rock that doesn't simply sink. The idea has no geological support." },
    ],
  },
  "El Dorado": {
    intro: [
      "Spanish conquistadors chased El Dorado—'the golden one'—across South America, and thousands died in the search. The legend has a documented real kernel that grew into a phantom city of gold.",
      "The record here is unusually clear: the ritual was real, the city was not.",
    ],
    points: [
      { title: "The golden man", they: "The relentless legend must have pointed to real treasure.", record: "It did point to something real: the Muisca people of Colombia ritually covered a new chief in gold dust and offered gold to Lake Guatavita. 'El Dorado' first meant this gilded person, not a place." },
      { title: "The city of gold", they: "A metropolis of gold waits somewhere in the Amazon.", record: "As the story passed through Spanish retelling, the gilded man became a golden city and then a golden empire; dredging of Lake Guatavita recovered genuine Muisca gold offerings, but no city of gold has ever been found." },
    ],
  },
  "The Fountain of Youth": {
    intro: [
      "The tale that Spanish explorer Juan Ponce de León searched Florida for waters that restore youth is one of the most repeated in the New World's history. It is also, as history, largely a posthumous invention.",
      "Restorative-water myths are ancient and worldwide; attaching one to Ponce de León happened after his death.",
    ],
    points: [
      { title: "Ponce de León's quest", they: "He explored Florida chasing the legendary fountain.", record: "His actual charters and expedition records mention gold, land, and colonization—not a fountain. The youth-water story was attached to him by chronicler Gonzalo Fernández de Oviedo years after he died, partly to mock him." },
      { title: "The universal legend", they: "So many cultures describe it that a real source must exist.", record: "Rejuvenating-water myths appear from Herodotus to medieval romance—a recurring human wish, not a shared memory of a real place; no such spring has ever been found or needs to be to explain the story." },
    ],
  },
  "King Arthur": {
    intro: [
      "The once and future king—Camelot, Excalibur, the Round Table—is one of the West's great story cycles. Whether any real fifth- or sixth-century leader lies beneath the romance is a genuine, unresolved historical question.",
      "The familiar Arthur is high-medieval literature; the possible historical kernel is thin and unprovable.",
    ],
    points: [
      { title: "A real war-leader", they: "A post-Roman British commander really did hold off the Saxons—that's Arthur.", record: "A kernel is possible: early sources (Nennius, the Annales Cambriae) name an 'Arthur' at battles like Badon, but they were written centuries later and are unreliable. No contemporary source names him; the case is open, not confirmed." },
      { title: "Camelot and Excalibur", they: "Sites like Tintagel and Cadbury prove the court existed.", record: "Tintagel and Cadbury are real, important post-Roman sites—but nothing ties them to an Arthur; Camelot, the Round Table, and the sword-in-the-stone first appear in 12th–13th-century romance by Geoffrey of Monmouth and Chrétien de Troyes." },
    ],
  },
  "Robin Hood": {
    intro: [
      "The outlaw of Sherwood who robbed the rich to feed the poor has been sought in the historical record for centuries, with candidates from Yorkshire fugitives to dispossessed nobles.",
      "Court records suggest 'Robin Hood' became a generic label for an outlaw before it became a biography.",
    ],
    points: [
      { title: "A real outlaw", they: "A specific dispossessed nobleman inspired the legend.", record: "By the 1260s, legal records use 'Robehod' / 'Rabunhod' as a nickname for outlaws generally, suggesting the name was already a type, not one traceable man; the noble-birth version is a later Tudor addition." },
      { title: "The ballads", they: "The consistent Sherwood setting points to one historical figure.", record: "The earliest ballads place him in Barnsdale (Yorkshire) as a yeoman, not a nobleman in Nottinghamshire; details shifted over centuries as the legend absorbed new characters like Maid Marian and Friar Tuck." },
    ],
  },
  "The Trojan War": {
    intro: [
      "Homer's Iliad describes a ten-year Greek siege of Troy. For a long time scholars doubted Troy existed at all—until Heinrich Schliemann's 1870s excavations at Hisarlik in Turkey found a real, layered city.",
      "The record confirms the place and suggests possible conflict, while leaving the epic's heroes and events as literature.",
    ],
    points: [
      { title: "Did Troy exist?", they: "Schliemann proved Homer was writing history.", record: "Troy is real: Hisarlik shows many superimposed cities, and layer Troy VII shows destruction by war around the traditional date. That a conflict occurred is plausible; that it matched Homer's ten-year epic is not established." },
      { title: "The heroes and gods", they: "Achilles, Helen, and the wooden horse record real events.", record: "The Iliad was composed centuries after any Bronze Age war and is shaped by oral poetry and mythology; no evidence identifies its named individuals or the horse. A historical seed under legendary bloom is the honest reading." },
    ],
  },
  "Noah's flood": {
    intro: [
      "A great deluge that destroys the world appears in the Hebrew Bible and, strikingly, in the older Mesopotamian epics of Gilgamesh and Atrahasis. Flood stories recur across many cultures, which believers read as memory of a single global event.",
      "Geology rules out a worldwide flood, while catastrophic regional floods offer a plausible source for the Near Eastern stories.",
    ],
    points: [
      { title: "A global deluge", they: "Flood myths worldwide preserve the memory of Noah's flood.", record: "There is no geological signature of a simultaneous global flood—no worldwide sediment layer, and the water volume required doesn't exist; unrelated cultures near rivers and coasts independently produce flood myths." },
      { title: "A real regional flood", they: "Something catastrophic must have seeded the shared stories.", record: "Strong candidates exist: catastrophic Mesopotamian river floods, and the proposed rapid filling of the Black Sea basin around 5600 BCE, could underlie the Gilgamesh and Genesis narratives without any global event." },
    ],
  },
  "The Garden of Eden": {
    intro: [
      "Genesis places Eden at the source of four rivers, two of them named as the Tigris and Euphrates. Seekers have proposed locations from southern Iraq to the Persian Gulf to Armenia.",
      "The geography is partly symbolic and partly unidentifiable, and the garden is a mythic-theological setting rather than a mappable site.",
    ],
    points: [
      { title: "The four rivers", they: "Naming the Tigris and Euphrates pins Eden to a real place.", record: "Two rivers are identifiable, but the Pishon and Gihon match nothing on the map; the text blends real and symbolic geography, and shifting river courses over millennia make any 'location' speculative." },
      { title: "Finding it", they: "Satellite traces of a dried riverbed reveal Eden's site.", record: "A proposed dried channel in Arabia is interesting geology but doesn't identify a garden; Eden functions as a theological origin-place, and no archaeology can locate a mythic paradise." },
    ],
  },
  "Giants and the Nephilim": {
    intro: [
      "The Nephilim of Genesis, described as offspring of the 'sons of God,' are read by some as literal giants whose skeletons are supposedly unearthed and then suppressed by mainstream science and the Smithsonian.",
      "The 'giant skeleton' evidence traces to hoaxes and doctored photographs, and 19th-century mound reports dissolved under measurement.",
    ],
    points: [
      { title: "The suppressed skeletons", they: "Giant human skeletons are found and the Smithsonian hides them.", record: "The viral images are documented photo-manipulation contest entries; no museum holds giant human remains, and the 'cover-up' rests on a fabricated newspaper-style article, not any catalogued specimen." },
      { title: "The mound-builder giants", they: "19th-century accounts describe seven- and eight-foot skeletons in burial mounds.", record: "Early, imprecise reports exaggerated normal remains; careful excavation of the same mounds found ordinary human skeletons, and the giant claims never survived professional measurement." },
    ],
  },
  "Shangri-La": {
    intro: [
      "Shangri-La—a hidden Himalayan valley of harmony and near-immortality—is often treated as an ancient legend awaiting discovery. It is, in fact, a modern literary creation.",
      "James Hilton coined it in his 1933 novel Lost Horizon, drawing loosely on the older Tibetan Buddhist myth of Shambhala.",
    ],
    points: [
      { title: "The hidden valley", they: "An undiscovered paradise valley of immortals lies in the mountains.", record: "Shangri-La has no pre-1933 existence; Hilton invented the name and place for his novel. The Himalayas are thoroughly explored and mapped, with no such valley." },
      { title: "The Shambhala link", they: "Hilton was tapping a real esoteric tradition.", record: "Shambhala is a genuine Tibetan Buddhist mythic kingdom—but a spiritual and symbolic one, not a geographic destination; a Chinese county rebranded itself 'Shangri-La' in 2001 purely for tourism." },
    ],
  },
  "The curse of the pharaohs": {
    intro: [
      "After the 1922 opening of Tutankhamun's tomb, the death of financier Lord Carnarvon months later ignited a global 'mummy's curse' sensation, stoked by newspapers and by authors like Arthur Conan Doyle.",
      "There is no curse inscription in the tomb, and the excavators' lifespans were ordinary.",
    ],
    points: [
      { title: "The deaths", they: "Those who entered the tomb died mysterious early deaths.", record: "Carnarvon died of an infected mosquito bite (blood poisoning), a common pre-antibiotic fate; a 2002 British Medical Journal study found no significant difference in lifespan between those present at the opening and comparison groups." },
      { title: "The warning", they: "An inscribed curse promised death to intruders.", record: "No such inscription exists in Tutankhamun's tomb; the 'curse' text was invented and embellished by the press, and Howard Carter, the tomb's principal excavator, lived another 16 years." },
    ],
  },
  "The Amber Room": {
    intro: [
      "A dazzling chamber of amber panels gifted to Russia in the 18th century, the Amber Room was looted by Nazi forces from near Leningrad in 1941 and installed in Königsberg Castle—then vanished amid the war's end.",
      "Its fate is a genuine unsolved case, with the strongest evidence pointing to destruction rather than a hidden hoard.",
    ],
    points: [
      { title: "The hidden treasure", they: "The room survives in a secret bunker, mine, or sunken ship.", record: "Repeated searches of tunnels, mines, and wrecks have found nothing; treasure-hunt claims recur without payoff. The panels were last securely documented in Königsberg Castle in 1944." },
      { title: "Destroyed in the fire", they: "Something so precious would have been evacuated, not lost.", record: "Königsberg Castle burned in 1944–45 as the city fell; historians consider it most likely the amber—flammable and fragile—was destroyed there, though recovered fragments keep a sliver of the mystery open." },
    ],
  },
  "Nazi gold trains": {
    intro: [
      "The legend of an armored train full of looted gold, sealed in a tunnel in Poland's Owl Mountains as the Reich collapsed, has drawn treasure hunters for decades—and made global headlines in 2015.",
      "The much-publicized 'discovery' was excavated live and found nothing; the tunnels are real, the train is not.",
    ],
    points: [
      { title: "The 2015 find", they: "Ground-penetrating radar revealed a buried armored train.", record: "The 2015 site near Wałbrzych was excavated on camera in 2016 and contained only natural soil and rock (glacial till); geologists had warned the 'train' anomaly was a natural formation." },
      { title: "The tunnels", they: "The Riese tunnel complex was built to hide the gold.", record: "Project Riese is a real, unfinished network of Nazi tunnels—but built for headquarters or industry, not documented as a treasure vault; no gold train appears in any wartime record of the region." },
    ],
  },
  "Ley lines": {
    intro: [
      "In 1921, amateur antiquarian Alfred Watkins noticed that ancient sites in the English landscape seemed to line up, and proposed old straight trackways he called 'leys.' Later writers recast them as channels of earth energy linking sacred places worldwide.",
      "The alignments are a statistical artifact, and no energy has ever been detected.",
    ],
    points: [
      { title: "The alignments", they: "Ancient sites line up too often to be chance—they mark energy paths.", record: "With thousands of features on any map, straight lines through several are mathematically inevitable; the same 'alignments' appear when the test is run on random points, as skeptics have demonstrated." },
      { title: "The earth energy", they: "Dowsers and sensitives detect power flowing along the lines.", record: "No instrument has ever measured any such energy; dowsing fails controlled tests, and Watkins himself proposed mundane trade-and-travel routes, not mystical forces—the energy idea was added decades later." },
    ],
  },
  "Book of Enoch": {
    intro: [
      "The Book of Enoch, an ancient Jewish text describing fallen angels ('Watchers'), giants, and cosmic secrets, is often presented as a scripture the Church 'banned' or 'hid.' It is quoted in the New Testament Epistle of Jude and was preserved in full by the Ethiopian Orthodox Church.",
      "The reality is that non-canonical is not the same as suppressed: the text has been public, studied, and translated for centuries.",
    ],
    points: [
      { title: "Was it suppressed?", they: "The Church buried Enoch to hide forbidden knowledge.", record: "Enoch was simply not included in most biblical canons—a status it shares with many ancient writings—while remaining canonical in Ethiopia and widely available; fragments were even found among the Dead Sea Scrolls." },
      { title: "The forbidden secrets", they: "It reveals angelic technology and the true history of giants.", record: "Enoch is a real and fascinating apocalyptic text reflecting its era's cosmology; scholars read the Watchers-and-giants narrative as ancient religious literature, not concealed history or technology." },
    ],
  },
  "Ark of the Covenant": {
    intro: [
      "The gold-covered chest said to hold the tablets of the Ten Commandments vanishes from the biblical record around the Babylonian sack of Jerusalem in 586 BCE. Claimants for its survival include an Ethiopian church in Axum, chambers beneath Jerusalem, and various legends.",
      "Its fate is genuinely unknown, and the leading claim is unverifiable by design.",
    ],
    points: [
      { title: "It's in Axum", they: "Ethiopia's Church of Our Lady Mary of Zion guards the real Ark.", record: "The claim is central to Ethiopian tradition, but no independent observer is ever permitted to examine the object; a single appointed guardian keeps it unseen, so the claim can be neither confirmed nor tested." },
      { title: "Where it went", they: "It survives hidden somewhere, awaiting rediscovery.", record: "The historical trail ends with Babylon's destruction of Solomon's Temple; the Ark may have been captured, destroyed, or hidden, but no artifact matching it has ever surfaced with any chain of evidence." },
    ],
  },
  "Holy Grail": {
    intro: [
      "The cup of the Last Supper—or the vessel that caught Christ's blood—became the object of medieval quest literature and, more recently, of theories reframing the 'Grail' as a bloodline. Over 200 vessels have been claimed as the true Grail.",
      "The Grail enters history as literature, not relic, and no claimant has a credible ancient provenance.",
    ],
    points: [
      { title: "The surviving cup", they: "The true Grail is preserved in a European cathedral vault.", record: "Candidates like the Valencia chalice are genuinely old but have no documented link to the first century; none can be traced back through the centuries that would be required, and the object is unattested before medieval romance." },
      { title: "The bloodline theory", they: "'Grail' really means a secret royal lineage of Jesus.", record: "This popular idea rests on the Priory of Sion documents, which were exposed as a 20th-century hoax planted by Pierre Plantard; no historical evidence supports the bloodline reading." },
    ],
  },
  "The Spear of Destiny": {
    intro: [
      "The Holy Lance that pierced Christ's side became a legendary talisman said to grant its holder power over history—a mystique attached in the 20th century to Adolf Hitler, who supposedly coveted the Vienna spear.",
      "Several 'Holy Lances' exist; the most famous has been dated well after Roman times, and the Hitler mystique is largely a modern invention.",
    ],
    points: [
      { title: "The power of the lance", they: "Whoever holds it commands destiny—why else would Hitler seize it?", record: "The 'Hitler and the spear' drama comes chiefly from Trevor Ravenscroft's 1973 occult book The Spear of Destiny, which mixed history with invention; there is no documented evidence Hitler pursued it for occult power." },
      { title: "Is it authentic?", they: "The Vienna lance is the genuine first-century weapon.", record: "Metallurgical testing dates the Vienna lance to around the 7th century CE—centuries too late—though it incorporates an older nail said to be from the crucifixion; multiple rival 'true' lances exist in Rome, Armenia, and elsewhere." },
    ],
  },
  "The Bible Code": {
    intro: [
      "Popularized by Michael Drosnin's 1997 bestseller, the 'Bible Code' claims that equidistant letter sequences (ELS) hidden in the Hebrew Torah encode predictions of modern events like assassinations and wars.",
      "The method finds 'predictions' in any large text, and the original academic paper behind it collapsed under scrutiny.",
    ],
    points: [
      { title: "The hidden predictions", they: "Statistically improbable clusters of names and dates prove divine encoding.", record: "Critics, including mathematician Brendan McKay, found equally 'improbable' predictions in Moby-Dick and War and Peace using the same technique; with flexible letter-spacing and word choice, hits are guaranteed in any long text." },
      { title: "The original study", they: "A peer-reviewed paper proved the codes were real.", record: "The 1994 Witztum-Rips-Rosenberg paper was later shown to depend on tunable choices (which spellings of names to use); when those were fixed independently, the effect vanished. The consensus is that it fails." },
    ],
  },
  "Pyramids and lost technology": {
    intro: [
      "The Great Pyramid's precision and scale routinely prompt claims that its builders had lost technology—power tools, sound levitation, or outside help. The counter is not assertion but a documented construction record.",
      "Quarries, tools, worker settlements, and even administrative papyri survive.",
    ],
    points: [
      { title: "Cutting and fitting granite", they: "Bronze-age copper tools can't cut granite to this precision.", record: "Experimental archaeology cuts and dresses granite with dolerite pounders, copper saws with sand abrasive, and drills—matching tool marks found on ancient stones; the precision is within reach of skilled, organized labor." },
      { title: "Who built it", they: "Slaves or aliens—no ordinary workforce could manage it.", record: "Excavated worker villages at Giza reveal a paid, fed, medically-treated workforce; the Merer papyri (c. 2560 BCE) record crews hauling limestone to Giza—first-hand logistics of the build." },
    ],
  },
  "Nazca Lines": {
    intro: [
      "The vast desert geoglyphs of southern Peru—figures and lines only fully legible from the air—have inspired claims of runways for ancient astronauts. Archaeology explains both how and, increasingly, why they were made.",
      "The Nazca people made them by clearing dark stones to reveal pale ground beneath—a technique modern teams have reproduced.",
    ],
    points: [
      { title: "Only visible from above", they: "Figures meant to be seen from the sky imply flight or aliens.", record: "The lines are visible from surrounding foothills and are simple to lay out at ground level with stakes and cord; teams have recreated Nazca-style figures without aerial help. Being clearest from above doesn't require airborne makers." },
      { title: "Their purpose", they: "They must be landing strips or star maps for visitors.", record: "The 'runways' are shallow surface clearings that couldn't bear aircraft; leading explanations tie the lines to water and fertility ritual—processional paths toward scarce water sources—an active but earthbound scholarly debate." },
    ],
  },
  "Stonehenge's purpose": {
    intro: [
      "Stonehenge, built in stages from roughly 3000 to 2000 BCE, has been credited to Merlin, druids, and aliens. Its builders long predate the druids, and archaeology has resolved much—though not all—of the mystery.",
      "The construction and some functions are established; the full ceremonial meaning is not.",
    ],
    points: [
      { title: "Who built it", they: "Druids or otherworldly help raised the stones.", record: "Radiocarbon dating places construction over a thousand years before the druids existed; the smaller bluestones were quarried in the Preseli Hills of Wales and transported ~250 km, with quarry sites identified." },
      { title: "What it was for", they: "The true purpose is deliberately hidden from us.", record: "Solstice alignments are clear, and it served as a cremation cemetery and ceremonial site; the precise beliefs behind it remain genuinely unknown, but that's ordinary archaeological uncertainty, not concealment." },
    ],
  },
  "Easter Island's statues": {
    intro: [
      "The nearly 1,000 moai of Rapa Nui—some weighing 80 tonnes—have prompted claims that the isolated islanders couldn't have moved them without lost knowledge or outside help. Their descendants and archaeologists have shown otherwise.",
      "Quarries, unfinished statues, and successful experiments document the whole process.",
    ],
    points: [
      { title: "Moving the moai", they: "No small island society could transport 80-tonne statues.", record: "Oral tradition says the moai 'walked'; in 2012 a team rocked a full-size replica upright forward with three ropes, matching the roads' wear and the statues' forward-leaning shape. The Rano Raraku quarry shows every production stage." },
      { title: "The 'collapse'", they: "A mysterious catastrophe wiped out the statue-builders.", record: "The population decline is now attributed largely to post-contact disease, slave raids, and introduced rats affecting palms—not a self-inflicted 'ecocide' mystery; the islanders' descendants are still there." },
    ],
  },
  "Göbekli Tepe": {
    intro: [
      "This 11,600-year-old megalithic site in Turkey genuinely rewrote the timeline of monumental architecture—built by pre-agricultural people, before pottery or the wheel. It is sometimes claimed to be 'suppressed' or evidence of a lost advanced civilization.",
      "In fact it was excavated openly, published in mainstream journals, and is a celebrated UNESCO World Heritage Site.",
    ],
    points: [
      { title: "Suppressed discovery?", they: "Mainstream archaeology buried a find that breaks its timeline.", record: "The opposite happened: Klaus Schmidt's excavations were headline news, the site is a UNESCO monument, and it openly revised thinking about when monument-building began. Slow, deliberate excavation isn't a cover-up." },
      { title: "A lost civilization", they: "Only an advanced culture could carve and raise these pillars.", record: "The carvings and T-pillars are sophisticated but consistent with skilled hunter-gatherer societies using stone tools; the site shows how monumental construction may have preceded farming, not that outsiders built it." },
    ],
  },
  "The Antikythera mechanism": {
    intro: [
      "Recovered from a Roman-era shipwreck in 1901, this corroded bronze device turned out to be an astonishing geared analog computer—around 2,000 years old—for predicting astronomical positions and eclipses. It's sometimes cited as impossible for its time, hinting at time travel or aliens.",
      "It is real, thoroughly studied, and a testament to Hellenistic Greek engineering.",
    ],
    points: [
      { title: "Too advanced for its era", they: "A geared computer in antiquity means outside intervention.", record: "CT scanning revealed dozens of precision gears implementing known Greek astronomical theory; ancient texts describe similar (lost) devices by Archimedes and others. It's the pinnacle of documented Greek mechanics, not an anachronism." },
      { title: "Why nothing like it survives", they: "Its uniqueness proves it doesn't belong.", record: "Bronze was routinely melted and reused, so complex mechanisms rarely survive; the Antikythera device endured only because it sank. Its sophistication implies a tradition of such instruments, most now lost." },
    ],
  },
  "The Bosnian pyramids": {
    intro: [
      "Since 2005, Semir Osmanagić has promoted the hills around Visoko, Bosnia as the world's largest and oldest human-made pyramids, drawing tourists and volunteers.",
      "Geologists identify the hills as natural formations, and professional archaeology has strongly rejected the claim.",
    ],
    points: [
      { title: "The pyramid shape", they: "The symmetry, angles, and 'concrete' blocks are engineered.", record: "Geologists identify 'flatirons'—naturally occurring angular hills of layered sedimentary rock common in the region; the 'concrete' is natural conglomerate. The shapes are geology, not masonry." },
      { title: "The excavations", they: "Tunnels and paved terraces prove ancient construction.", record: "The European Association of Archaeologists called the project a 'cruel hoax' that endangers real heritage; the 'tunnels' are consistent with old mine works, and no verified artifacts support a pyramid civilization." },
    ],
  },
  "Yonaguni monument": {
    intro: [
      "Off the Japanese island of Yonaguni lies a submerged formation of flat terraces and straight edges, discovered by divers in 1986. Some see a 10,000-year-old sunken city predating known civilization.",
      "Most geologists read it as natural sandstone fracturing, matching the coastline nearby.",
    ],
    points: [
      { title: "The straight edges", they: "The right angles and steps are too regular to be natural.", record: "The local sandstone fractures along straight, parallel planes and right angles—visible in the same rock on the adjacent shore; the 'steps' follow these natural bedding planes without tool marks." },
      { title: "The lost city", they: "It's the ruin of a pre-Ice-Age civilization now underwater.", record: "No artifacts, tools, inscriptions, or worked stone have been recovered—only the formation itself; sea levels did rise after the Ice Age, but that doesn't make natural rock a city. The debate leans natural." },
    ],
  },
  "The Piri Reis map": {
    intro: [
      "A 1513 Ottoman map by admiral Piri Reis is famous for a claim that it shows the coast of Antarctica—ice-free—implying ancient surveys of a continent not 'discovered' until 1820.",
      "The southern coastline is better explained as South America drawn to fit the parchment, and the map names its ordinary sources.",
    ],
    points: [
      { title: "Ice-free Antarctica", they: "The map shows Antarctica's coast without ice—impossible in 1513.", record: "The disputed coast is most plausibly the South American coastline bent eastward to fit the page edge, a common cartographic distortion; the 'ice-free' reading requires assuming it's Antarctica in the first place." },
      { title: "The ancient sources", they: "Piri Reis copied lost maps from a vanished advanced civilization.", record: "Piri Reis himself wrote that he compiled the map from about 20 contemporary sources, including Columbus-era Portuguese charts; those are known map traditions, not relics of a lost people." },
    ],
  },
  "Out-of-place artifacts": {
    intro: [
      "'OOPArts'—objects supposedly too advanced for their strata, like a hammer encased in rock or machined spheres—are offered as proof that history is wrong. Examined individually, they resolve into misdatings, natural formations, or modern intrusions.",
      "A single verified anomaly would be a career-making find; none has passed review.",
    ],
    points: [
      { title: "The famous examples", they: "The London Hammer and Klerksdorp spheres can't fit the timeline.", record: "The 'London Hammer' is a 19th-century tool encased by fast-forming mineral concretion, not ancient rock; the Klerksdorp spheres are natural mineral nodules (concretions). Each case has a mundane, examined explanation." },
      { title: "Why they persist", they: "Museums ignore anything that breaks the consensus.", record: "Museums and journals prize anomalies—an authentic OOPArt would rewrite textbooks and make careers; the reason they're dismissed is that, on examination, they turn out to be ordinary, not that they're feared." },
    ],
  },
  "The Baghdad Battery": {
    intro: [
      "A set of clay jars from Parthian-era Mesopotamia, each holding a copper cylinder and iron rod, was dubbed the 'Baghdad Battery' in 1938 and is cited as evidence of ancient electricity.",
      "The jars resemble known scroll containers, and no supporting electrical apparatus accompanies them.",
    ],
    points: [
      { title: "Ancient electricity", they: "Filled with acid, the jars generate current—so they were batteries.", record: "A vinegar or juice electrolyte does produce a fraction of a volt, but that shows what's possible, not what happened; there are no wires, conductors, or electroplated objects from the period to indicate actual use." },
      { title: "What they really were", they: "Why build the exact form of a galvanic cell by accident?", record: "The design closely matches Parthian storage vessels for sacred scrolls (the organic contents having decayed); the 'battery' interpretation is one modern reading of an object that fits a mundane, well-attested purpose." },
    ],
  },
  "Freemasons": {
    intro: [
      "Freemasonry is a real fraternal order that grew from medieval stonemasons' guilds into an 18th-century society with rituals, degrees, and famous members—from Mozart to several US founders. That reality anchors an enormous mythology of world control.",
      "The organization's influence is genuine and historical; the omnipotence attributed to it is not.",
    ],
    points: [
      { title: "Secret world rule", they: "Masons run governments, banks, and courts from behind the curtain.", record: "Lodges are publicly registered, rituals have been published for centuries, and membership is aging and declining—an odd basis for global control; documented influence is the ordinary networking of a large historic society." },
      { title: "The secrecy", they: "Hidden handshakes and oaths prove sinister purpose.", record: "The 'secrets' are largely recognition signs and ceremony, long since printed in exposés; charitable work and fellowship are the bulk of activity. Secrecy of ritual is not evidence of conspiracy." },
    ],
  },
  "Bohemian Grove": {
    intro: [
      "Each summer, a private men's club gathers powerful figures at a redwood camp in California for two weeks of retreat, opening with a theatrical 'Cremation of Care' ceremony before a giant owl statue. Infiltration footage (notably by Alex Jones in 2000) made it a conspiracy fixture.",
      "The camp, guest list, and ritual are real; evidence that policy is set there is thin.",
    ],
    points: [
      { title: "The owl ritual", they: "Elites perform occult rites to a pagan god.", record: "The 'Cremation of Care' is a documented piece of theatrical symbolism—burning an effigy of worldly worries to start the retreat—performed by a club with amateur-dramatics traditions, not evidence of literal worship." },
      { title: "Setting world policy", they: "Wars and presidencies are decided at the Grove.", record: "Powerful people do network there, and one 1942 meeting reportedly touched on the Manhattan Project—but the sweeping claim that policy is dictated at the camp rests on anecdote; it functions as an elite social retreat." },
    ],
  },
  "Skull and Bones": {
    intro: [
      "Yale's Skull and Bones, founded in 1832, is a genuinely secretive senior society whose members have included presidents (Taft, both Bushes), senators, and spies. Its tomb, rituals, and alumni power are real; the wilder claims are not.",
      "The society's influence reflects elite networking; the supernatural and criminal claims lack support.",
    ],
    points: [
      { title: "Geronimo's skull", they: "Bonesmen stole the Apache leader's skull for their tomb.", record: "The claim rests on a jokey 1918 letter between members; the Apache tribe's efforts and historians found no verifiable evidence the skull is there, and Geronimo's grave was likely never disturbed by the named parties." },
      { title: "Running the country", they: "Three Bonesmen presidents prove a hidden hand.", record: "Yale's elite pipeline explains members reaching high office over two centuries; in 2004 two Bonesmen (Bush and Kerry) opposed each other for president—hard to square with a single controlling agenda." },
    ],
  },
  "Operation Northwoods": {
    intro: [
      "In 1962, the US Joint Chiefs of Staff drafted Operation Northwoods—a proposal for staged, false-flag attacks (including on Americans) to manufacture a pretext for war with Cuba. It is frequently cited to argue that governments really do plot such things.",
      "This is confirmed history: the memo exists and was declassified. Crucially, it was rejected.",
    ],
    points: [
      { title: "Did they propose it?", they: "The Pentagon planned to attack its own citizens.", record: "Confirmed: the declassified 1962 document proposed faked terrorism, hijackings, and casualties to blame on Cuba—real, and genuinely chilling as evidence of what can be proposed at high levels." },
      { title: "What happened to it", they: "If they planned it once, they've done it since.", record: "Northwoods was rejected by Defense Secretary McNamara and President Kennedy and never enacted; it shows the proposal stage, and also that civilian oversight killed it. Extrapolating to executed plots requires separate evidence." },
    ],
  },
  "Tuskegee study": {
    intro: [
      "From 1932 to 1972, the US Public Health Service studied untreated syphilis in about 400 Black men in Alabama—deceiving them, denying them penicillin even after it became standard, and letting the disease progress. It is a cornerstone case of real, documented institutional abuse.",
      "Everything here is confirmed; it is history, not theory.",
    ],
    points: [
      { title: "Did it happen?", they: "The government deliberately let Black men die of a curable disease.", record: "Fully documented: the men were misled about their diagnosis and 'treatment,' denied available penicillin for decades, and studied to death. Exposed in 1972; a formal presidential apology came in 1997." },
      { title: "Its legacy", they: "This is why communities distrust public health.", record: "Correct—Tuskegee is a leading, evidence-based reason for medical distrust; acknowledging real abuses like this is different from accepting unevidenced claims, and helps separate the two." },
    ],
  },
  "COINTELPRO": {
    intro: [
      "COINTELPRO was a real FBI program (1956–1971) to surveil, infiltrate, and disrupt domestic political groups—civil rights organizations, the anti-war movement, and more—using illegal tactics, including efforts to discredit Martin Luther King Jr.",
      "It was exposed by a 1971 activist burglary and the Church Committee; the documents survive.",
    ],
    points: [
      { title: "Did the FBI do it?", they: "The Bureau secretly waged war on lawful dissent.", record: "Confirmed: internal memos document infiltration, forged letters, smear campaigns, and efforts to 'neutralize' targets—including the notorious letter urging King toward suicide. It is fully established history." },
      { title: "The takeaway", they: "The state still does this—just better hidden.", record: "COINTELPRO shows what an exposed domestic operation looks like: stolen files, hearings, reforms. It's the model for how real abuses surface, which is why documented cases carry more weight than speculation." },
    ],
  },
  "Gulf of Tonkin": {
    intro: [
      "The 1964 Gulf of Tonkin incidents were used to justify escalating the Vietnam War. A first clash on 2 August was real; a claimed second attack on 4 August, which drove the war-authorizing resolution, appears not to have happened.",
      "Declassified analysis supports the skeptical reading, making this a partly-confirmed case of distorted intelligence.",
    ],
    points: [
      { title: "The second attack", they: "The 4 August attack was invented to start a war.", record: "A declassified NSA historical study concluded the 4 August 'attack' did not occur—likely misread radar/sonar and jittery signals in bad weather; officials nonetheless presented it to Congress as real." },
      { title: "Deliberate or error", they: "It was a calculated false flag.", record: "The evidence points more to genuine confusion amplified by leaders eager for a pretext than to a fully staged event; either way, Congress acted on faulty information, which is the documented core." },
    ],
  },
  "The Philadelphia Experiment": {
    intro: [
      "The legend claims that in 1943 the US Navy made the destroyer escort USS Eldridge invisible—and teleported it—during an experiment that left sailors fused to the deck. It originates with a single eccentric correspondent.",
      "Ship records contradict the story, and its source is discredited.",
    ],
    points: [
      { title: "The invisible ship", they: "The Navy achieved and then buried teleportation and invisibility.", record: "The Eldridge's logs place it elsewhere on the claimed dates, and crew reunions denied any such event; the tale traces to Carl Allen (Carlos Allende), whose letters to a UFO author are the sole origin and are considered unreliable." },
      { title: "The kernel", they: "Something real must underlie such a specific story.", record: "The most likely seed is degaussing—wrapping ships in cables to neutralize magnetic mines, making them 'invisible' to magnetic detection; that mundane, documented technology was embellished into teleportation." },
    ],
  },
  "New World Order": {
    intro: [
      "The 'New World Order' names an alleged plan by a secret elite to impose a single authoritarian world government, folding in banks, the UN, and staged crises. Real elite coordination and globalization give it surface plausibility.",
      "Elites, summits, and lobbying are studied openly; the unified-cabal frame keeps failing when tested against how power actually behaves.",
    ],
    points: [
      { title: "The hidden plan", they: "One cabal steers wars, currencies, and pandemics toward world government.", record: "Documented elite forums (Davos, think tanks) pursue competing, often clashing agendas; the frictionless single-plan model doesn't match a world where elites leak, litigate, and lose to each other constantly." },
      { title: "The evidence", they: "Leaders openly say 'new world order'—they're telling us.", record: "The phrase is common political rhetoric for shifts in the global balance of power (used since at least Woodrow Wilson); quoting it isn't evidence of a coordinated secret government, which no document has ever established." },
    ],
  },
  "Bilderberg Group": {
    intro: [
      "Since 1954, the Bilderberg Meeting has gathered several hundred political, business, and financial leaders for private, off-the-record annual discussions. The secrecy of its sessions fuels claims that global decisions are made there.",
      "The meetings are real and worth scrutiny; evidence of binding decisions is absent.",
    ],
    points: [
      { title: "Where decisions get made", they: "World policy is set in secret at Bilderberg.", record: "Attendee lists and agendas are published; participants describe candid discussion under the Chatham House Rule—influential networking, certainly, but no mechanism to bind sovereign governments, and no leaked 'decisions.'" },
      { title: "The secrecy", they: "Closed doors mean sinister coordination.", record: "Off-record talks let officials speak frankly, which is common for elite forums; secrecy of conversation is a legitimate transparency concern, but not by itself evidence of a governing conspiracy." },
    ],
  },
  "FEMA camps": {
    intro: [
      "A long-running claim holds that the US Federal Emergency Management Agency has built a network of detention camps to imprison citizens under martial law. Photos of fenced facilities and stacked containers circulate as proof.",
      "The cited sites resolve into ordinary infrastructure, and the claim has run for decades without an activation.",
    ],
    points: [
      { title: "The camps", they: "Fenced facilities and 'FEMA coffins' are staged for mass detention.", record: "The photographed sites are Amtrak repair yards, National Guard posts, and disaster-supply staging; the 'coffins' are commercially sold burial vault liners stored by a manufacturer. None is a detention camp." },
      { title: "The plan", they: "Executive orders authorize round-ups at any moment.", record: "The cited executive orders concern ordinary continuity-of-government and emergency logistics; the theory has been recycled since the 1980s with no camp ever operating—an unusually long-lived unfulfilled prediction." },
    ],
  },
  "The Georgia Guidestones": {
    intro: [
      "Erected in 1980 in rural Georgia by an anonymous commissioner using the pseudonym 'R.C. Christian,' the granite Guidestones bore ten 'guidelines' in eight languages, including one about maintaining humanity under 500 million—read by many as a depopulation agenda.",
      "The monument was bombed and demolished in 2022; its origin was pseudonymous but mundane.",
    ],
    points: [
      { title: "The depopulation message", they: "The '500 million' guideline reveals an elite plan to cull humanity.", record: "The text is framed as advice for rebuilding civilization after a hypothetical collapse, not a program to cause one; it reflected one anonymous patron's Cold War-era views, not a documented plan or organization." },
      { title: "Who built it", they: "A secret society commissioned it in code.", record: "'R.C. Christian' evokes Rosicrucian imagery, but investigations point to a private individual (with a Georgia banker as intermediary) rather than any society; it was a single commissioned monument, destroyed by a 2022 bombing." },
    ],
  },
  "Elvis is alive": {
    intro: [
      "Since Elvis Presley's death on 16 August 1977, sightings and theories have insisted the King faked his death to escape fame. Alleged misspellings on his grave and look-alike sightings feed the belief.",
      "The medical and documentary record is consistent with his death.",
    ],
    points: [
      { title: "The sightings", they: "People keep seeing Elvis alive decades later.", record: "Elvis impersonation is a global industry, and grief plus fame reliably produce 'sightings' of dead celebrities; none has ever produced verifiable proof of the living man." },
      { title: "The faked death", they: "A misspelled middle name on the grave signals a staged exit.", record: "The 'Aaron/Aron' spelling reflects Elvis's own later preference for the traditional spelling, not a coded clue; the death certificate, autopsy, and family accounts document his death at Graceland." },
    ],
  },
  "The Titanic switch": {
    intro: [
      "A theory holds that White Star Line secretly swapped the damaged sister ship Olympic for the Titanic and sank it deliberately to collect insurance. It hinges on the ships being near-identical.",
      "Physical evidence from the wreck and the company's finances contradict the swap.",
    ],
    points: [
      { title: "The swap", they: "The two identical ships were switched for an insurance scam.", record: "The wreck's recovered parts carry Titanic's yard number 401 (Olympic was 400); the ships differed in visible details like porthole spacing and promenade layout, which don't match a switch." },
      { title: "The insurance motive", they: "White Star sank a ship for the payout.", record: "The Titanic was under-insured—White Star took a large net loss—so the scheme would have been financially self-defeating; deliberately drowning 1,500 people for a losing claim has no supporting evidence." },
    ],
  },
  "Avril Lavigne replacement": {
    intro: [
      "A viral theory claims the singer Avril Lavigne died around 2003 and was replaced by a body double named 'Melissa,' citing changes in appearance and handwriting.",
      "It was created deliberately to demonstrate how conspiracy theories spread—and then took on a life of its own.",
    ],
    points: [
      { title: "The evidence", they: "Photo differences and 'Melissa' clues prove a swap.", record: "The theory began as a Brazilian fan blog experiment explicitly designed to show how easily a conspiracy can be manufactured from ordinary aging and styling changes; the author has said so, and the disclaimer remains." },
      { title: "Why it spread", they: "It resonates because something feels off.", record: "It spread precisely because the creators built it to be persuasive as a demonstration—selecting flattering vs. unflattering photos and normal signature drift; it's a case study in method, not a real death." },
    ],
  },
  "Walt Disney frozen": {
    intro: [
      "A durable myth claims Walt Disney had himself cryonically frozen—often 'under the Pirates of the Caribbean ride'—awaiting future revival.",
      "Records show he was cremated, and the rumor predates cryonics' fame.",
    ],
    points: [
      { title: "The frozen body", they: "Disney is in cryonic storage awaiting revival.", record: "Disney died in December 1966 and was cremated days later; his remains are interred at Forest Lawn Memorial Park, per death and interment records. No cryonics facility has ever claimed him." },
      { title: "Where it came from", they: "The secrecy around his death fuels the story.", record: "The rumor appears to have spread among studio animators as a dark joke and grew after his death; the first human cryopreservation happened in 1967, after Disney was already cremated." },
    ],
  },
  "Satanic Panic": {
    intro: [
      "In the 1980s and early '90s, a wave of allegations claimed secret networks were abusing children in satanic rituals, most infamously in the McMartin preschool case. Convictions and careers were destroyed before the cases collapsed.",
      "This is a documented moral panic—the panic was real, the ritual network was not.",
    ],
    points: [
      { title: "The abuse rings", they: "Widespread satanic ritual abuse was really happening.", record: "A multi-year FBI study (the 1992 Lanning report) found no evidence of organized satanic ritual abuse despite thousands of investigations; the dramatic cases relied on coerced, leading interviews of young children." },
      { title: "Why it took hold", they: "So many accusations can't all be false.", record: "The panic spread through suggestive therapy, sensational media, and 'recovered memory' techniques now known to implant false memories; it's a classic, well-studied moral panic, not a hidden crime wave." },
    ],
  },
  "Birds Aren't Real": {
    intro: [
      "'Birds Aren't Real' claims the government replaced all birds with surveillance drones. It has rallies, merchandise, and billboards.",
      "It is open satire—created to parody conspiracy culture—though it is sometimes taken at face value.",
    ],
    points: [
      { title: "Is it serious?", they: "The movement insists birds are drones.", record: "Founder Peter McIndoe created it in 2017 as deliberate satire and has explained the joke in mainstream interviews; the 'movement' is performance art commenting on misinformation, not a real belief." },
      { title: "Why it works", they: "It looks exactly like a real conspiracy movement.", record: "That's the point—by faithfully mimicking the aesthetics and rhetoric of conspiracies, it exposes how they operate; its success at fooling some observers is part of the commentary." },
    ],
  },
  "Polybius": {
    intro: [
      "Legend tells of 'Polybius,' a 1981 arcade game in Portland that allegedly caused seizures, amnesia, and nightmares, monitored by men in black—then vanished.",
      "No physical evidence of the machine exists, and the story surfaces only from around 2000 online.",
    ],
    points: [
      { title: "The machine", they: "A real government-run arcade cabinet harmed players.", record: "No cabinet, flyer, manual, or period documentation has ever been found for a game called Polybius; arcade historians who catalogue obscure titles have turned up nothing contemporary." },
      { title: "The kernel", they: "Something must have inspired such a specific tale.", record: "Real 1981 incidents—arcade epilepsy cases and an FBI sweep of Portland arcades for gambling—plausibly fused into the legend online decades later; it reads as a modern folktale, not a covered-up event." },
    ],
  },
  "John Titor": {
    intro: [
      "In 2000–2001, a poster calling himself 'John Titor' claimed to be a soldier from 2036 sent back for a computer, and made dated predictions—including a US civil war by 2008 and no Olympics after 2004.",
      "The predictions failed, and analysis points to ordinary human authorship.",
    ],
    points: [
      { title: "The accurate warnings", they: "Titor foresaw real technology and events.", record: "His specific, dated predictions—civil war, no post-2004 Olympics, world war by 2015—did not happen; the 'hits' are vague or retrofitted. Time-travel claims made him unfalsifiable only where he stayed vague." },
      { title: "Who he was", they: "An anonymous traveler with genuine future knowledge.", record: "Investigations (including by an Italian TV program and stylometric analysis) point to a small group, likely a Florida lawyer and his brother, as the authors; it stands as a founding piece of internet legend." },
    ],
  },
  "Spontaneous human combustion": {
    intro: [
      "For centuries, rare cases have been reported of bodies burned almost to ash while surroundings stay largely intact—Charles Dickens even killed a character this way. The idea of a fire igniting from within the body has real historical staying power.",
      "Forensic science explains the scenes through the 'wick effect,' typically with an external ignition source.",
    ],
    points: [
      { title: "Burning from within", they: "Bodies reduced to ash with the chair untouched—no external fire could do that.", record: "The wick effect: clothing acts like a candle wick and body fat like wax, sustaining a slow, intense, localized fire for hours that consumes the body while charring little else. Experiments reproduce the pattern." },
      { title: "No ignition source", they: "Victims combust with nothing to light them.", record: "Investigated cases typically involve a plausible ignition—cigarette, fireplace, stove—often with the victim elderly, intoxicated, or immobile; the 'spontaneous' label reflects missing evidence, not internal fire." },
    ],
  },
  "Ouija boards": {
    intro: [
      "The planchette glides across the board and spells messages no single player admits moving. Marketed as a game since 1890, the Ouija board is taken by many as a genuine channel to spirits.",
      "The movement is a textbook demonstration of the ideomotor effect—unconscious muscle motion.",
    ],
    points: [
      { title: "No one is pushing", they: "The planchette moves on its own, so something else guides it.", record: "The ideomotor effect—tiny involuntary movements below awareness—drives the planchette; participants genuinely feel they aren't pushing while collectively nudging it, a demonstrated and repeatable phenomenon." },
      { title: "The messages", they: "It answers questions with knowledge the players don't have.", record: "When players are blindfolded or the board is secretly rotated, the 'messages' collapse into gibberish—proving the answers come from participants' own expectations, not an outside intelligence." },
    ],
  },
  "Ghosts and hauntings": {
    intro: [
      "Apparitions, cold spots, footsteps, and voices are reported across every culture and era—an experience millions describe sincerely. Whether they point to surviving spirits is one of the oldest questions there is.",
      "Controlled investigation consistently finds ordinary causes, while the felt experiences remain real and worth respecting.",
    ],
    points: [
      { title: "The evidence", they: "Recurring sightings, EVP recordings, and cold spots can't all be imagination.", record: "Investigations point to infrasound (which induces unease and 'presence'), drafts, carbon-monoxide effects, pareidolia in noise and shadow, and sleep paralysis; no ghost detection has survived rigorous, controlled testing." },
      { title: "Are the experiences real?", they: "Skeptics dismiss what people genuinely witness.", record: "The experiences are real and often vivid—the dispute is about their cause, not their sincerity; the brain reliably generates powerful presence-sensations and perceptions under specific, reproducible conditions." },
    ],
  },
  "The Winchester Mystery House": {
    intro: [
      "The sprawling California mansion of firearms heiress Sarah Winchester—with staircases to nowhere and doors opening onto walls—is famously said to have been built endlessly on a medium's advice to confuse the spirits of those killed by Winchester rifles.",
      "The oddities are real; the séance origin is tourism lore.",
    ],
    points: [
      { title: "The spirit instructions", they: "A medium told Sarah to build ceaselessly or die.", record: "No primary source documents any séance or medium's directive; the story appears in later promotional accounts. Sarah was a private, grieving widow and amateur architect who continually remodeled." },
      { title: "The strange features", they: "Stairs to nowhere prove a supernatural purpose.", record: "The 1906 earthquake sealed off and damaged sections, and decades of unplanned, unprofessional remodeling produced the quirks; many oddities are ordinary results of building without a master plan." },
    ],
  },
  "Crop circles": {
    intro: [
      "Elaborate geometric patterns appearing overnight in fields were, by the 1980s–90s, attributed to UFOs, plasma vortices, or unknown intelligence. Then two Englishmen demonstrated exactly how they'd been doing it.",
      "The record here is a confession followed by an entire art form.",
    ],
    points: [
      { title: "Too precise for humans", they: "The complexity and clean flattening exceed what people could make at night.", record: "In 1991 Doug Bower and Dave Chorley revealed they'd made circles since 1978 using planks and rope; today circle-making teams openly produce the most intricate designs on commission, quickly and by hand." },
      { title: "The anomalies", they: "Bent (not broken) stems and radiation prove a mysterious energy.", record: "Mechanical flattening can bend rather than snap stems, and claimed 'anomalies' haven't held up under controlled testing; the most complex, celebrated formations are documented human artworks." },
    ],
  },
  "The Bloop": {
    intro: [
      "In 1997, NOAA hydrophones recorded an ultra-low-frequency sound in the South Pacific so powerful it was heard across sensors thousands of kilometres apart—louder than any known animal, prompting speculation about a giant undiscovered creature.",
      "NOAA later matched the profile to ice, not biology.",
    ],
    points: [
      { title: "A giant animal", they: "The sound was 'organic' and too loud for any known creature.", record: "NOAA's acoustics program matched the Bloop's signature to icequakes—large icebergs cracking and calving off Antarctica; comparable sounds were recorded from known ice events." },
      { title: "The 'organic' quality", they: "Sped-up, it sounds alive.", record: "The famous clip is played 16× normal speed, which makes many natural sounds seem animal-like; at true speed and frequency it fits ice fracture, and the source region matches Antarctic ice, not a sea monster." },
    ],
  },
  "The Battle of Los Angeles": {
    intro: [
      "In the early hours of 25 February 1942, weeks after Pearl Harbor, anti-aircraft batteries over Los Angeles fired more than 1,400 shells into the night sky at a supposed enemy craft. A famous photo shows searchlights converging on a bright spot.",
      "The record points to war-nerves and a stray balloon, not a craft.",
    ],
    points: [
      { title: "The unhittable craft", they: "Guns fired 1,400 rounds and couldn't down the object.", record: "No aircraft was recovered or confirmed, and no attacker materialized; a lost weather balloon likely triggered the first sighting, after which jittery gunners fired at smoke, searchlights, and each other's shell-bursts." },
      { title: "The photograph", they: "The lit object at the center is a solid ship.", record: "The retouched Los Angeles Times image shows searchlight beams intersecting in haze and smoke; the 'object' is the convergence point of the lights, not a craft. Official accounts cited false alarm and jangled nerves." },
    ],
  },
  "Kecksburg": {
    intro: [
      "On 9 December 1965, a brilliant fireball crossed several US states, and residents of Kecksburg, Pennsylvania reported an acorn-shaped object landing in the woods, allegedly retrieved by the military. It's called 'Pennsylvania's Roswell.'",
      "A bolide was tracked that evening; the recovered-object claim rests on disputed testimony.",
    ],
    points: [
      { title: "The landed object", they: "Witnesses saw an engineered acorn-shaped craft hauled away by soldiers.", record: "A widely-observed fireball that night is consistent with a meteor; a NASA records search (court-ordered in the 2000s) found no recovered object, and no debris has surfaced. Accounts of a military cordon remain contested." },
      { title: "The cover-up", they: "The military's presence proves a retrieval.", record: "Some residents reported a search, but reports of what (if anything) was found conflict; candidate explanations include the meteor and, separately, a reentering satellite. No physical craft has ever been produced." },
    ],
  },
  "Aurora, Texas 1897": {
    intro: [
      "During the 1897 'mystery airship' wave, a Texas newspaper reported that an airship crashed into a windmill in Aurora, killing its non-human pilot, who was buried in the town cemetery. It predates Roswell by 50 years.",
      "The account is a single, likely fabricated story from a struggling town.",
    ],
    points: [
      { title: "The buried pilot", they: "A marked grave holds the airship's alien occupant.", record: "The lone source is a stringer's report during the era's airship-hoax craze; contemporaries said the writer invented it to draw attention to a town dying after being bypassed by the railroad and hit by crop failure and fire." },
      { title: "The evidence", they: "Metal fragments and the grave could be exhumed for proof.", record: "Investigations and metal-detector surveys of the cemetery have found no anomalous grave or debris; the 'gravestone' with an airship marking disappeared, and no remains have ever been produced." },
    ],
  },
  "The Solway Firth Spaceman": {
    intro: [
      "In 1964, a Cumbrian firefighter photographed his young daughter and, in one frame, a figure in what looks like a white spacesuit appeared behind her—though he insists no one was there.",
      "Analysis points to an ordinary overexposed figure, not a visitor.",
    ],
    points: [
      { title: "The spaceman", they: "A helmeted figure appears where no one stood.", record: "Kodak and later analysts concluded the 'figure' is most likely the photographer's wife, standing nearby, overexposed so her blue dress washed out white and her dark hair reads as a visor—consistent with the camera's settings." },
      { title: "No one was there", they: "The father is certain the frame was empty.", record: "Through a viewfinder a photographer concentrating on the child can miss someone at the edge of frame; the figure's height and position match an adult standing behind and to the side, not an added being." },
    ],
  },
  "The Falcon Lake incident": {
    intro: [
      "In May 1967, Canadian prospector Stefan Michalak reported encountering a landed craft near Falcon Lake, Manitoba; when it took off, hot gas allegedly burned a grid pattern into his chest. It is one of the best-documented physical-trace UFO cases.",
      "His injuries were real and investigated; the cause was never resolved.",
    ],
    points: [
      { title: "The burns", they: "A grid-patterned burn and lasting illness prove a craft's exhaust.", record: "Michalak's burns, nausea, and hospitalization are documented, and Canadian authorities investigated seriously without finding a hoax motive or a mundane explanation—leaving it officially unexplained, a genuinely strong case." },
      { title: "The landing site", they: "Radioactive soil marked where the craft sat.", record: "Investigators found some soil radioactivity but couldn't tie it conclusively to a craft, and no wreckage or independent witness emerged; the case remains an unresolved anomaly rather than confirmed contact." },
    ],
  },
  "The Varginha incident": {
    intro: [
      "In January 1996, residents of Varginha, Brazil—including three young women—reported a strange creature, amid rumors the military had captured beings. It's Brazil's most famous UFO case.",
      "An official inquiry offered a mundane identification, though secrecy keeps parts disputed.",
    ],
    points: [
      { title: "The creature", they: "Witnesses met a red-eyed, oily-skinned being the army seized.", record: "The Brazilian Army's investigation identified a mentally ill local man, nicknamed 'Mudinho,' wandering the area as the likely 'creature'; the young witnesses' account, though sincere, fits a frightened misidentification." },
      { title: "The captured beings", they: "Soldiers and a hospital handled non-human bodies.", record: "Alleged military and medical witnesses have denied capturing any being, and no body or physical evidence surfaced; heavy secrecy around routine army activity that day helped the story grow, but nothing was ever produced." },
    ],
  },
  "The Ariel School sighting": {
    intro: [
      "On 16 September 1994 in Ruwa, Zimbabwe, dozens of schoolchildren reported seeing a landed craft and beings during morning break. Their consistent testimony, gathered on video days later, makes it one of the most cited mass-sighting cases.",
      "The accounts are striking and have held for decades; they also carry the known caveats of group testimony.",
    ],
    points: [
      { title: "The consistent testimony", they: "Sixty-plus children independently described the same craft and beings.", record: "Many children did describe similar things, and several stand by it as adults—genuinely hard to dismiss; but they mingled during and after break, and early interviews (including by a well-known believer) used leading questions." },
      { title: "The lack of traces", they: "Something physical landed in that field.", record: "No ground marks, artifacts, or adult corroboration were documented at the time, and accounts of details varied; the case sits honestly as unexplained testimony rather than confirmed contact." },
    ],
  },
  "The Nimitz 'Tic Tac'": {
    intro: [
      "In November 2004, US Navy pilots from the USS Nimitz carrier group, backed by radar operators, reported and filmed a white, wingless, Tic-Tac-shaped object performing extreme maneuvers off California. Declassified footage and pilot testimony made it the flagship modern UAP case.",
      "The military has officially acknowledged the encounter as real and unexplained.",
    ],
    points: [
      { title: "Impossible performance", they: "Instant accelerations with no wings or exhaust beat any known aircraft.", record: "Pilots and multiple sensors recorded something they couldn't identify—officially acknowledged and unresolved; proposed mundane causes (sensor artifacts, parallax, gimbal effects in the video) explain parts but not every eyewitness account." },
      { title: "What it proves", they: "It's evidence of non-human technology.", record: "'Unidentified' is not 'extraterrestrial': the government confirms the objects were unidentified, while its UAP office finds no evidence of alien tech and notes how hard sensor interpretation is. The case is genuinely open, not concluded either way." },
    ],
  },
  "Pentagon UAP programs": {
    intro: [
      "Beginning with 2017 revelations about the secret AATIP program, followed by the UAP Task Force and the current AARO office, the US government has openly acknowledged studying unidentified aerial phenomena—fueling belief that officials are quietly confirming aliens.",
      "The programs are real and public; their findings so far are more sober than the headlines.",
    ],
    points: [
      { title: "Why study them at all", they: "Serious funded programs mean the government knows they're real craft.", record: "The programs exist to assess unidentified objects as potential security and safety risks—drones, foreign tech, sensor gaps—which is a mundane and legitimate mission; existence of a study isn't confirmation of aliens." },
      { title: "The findings", they: "AARO's reports hide the real conclusions.", record: "AARO's public reviews found no verified evidence of extraterrestrial technology and attributed many cases to ordinary objects and sensor effects, while leaving some unresolved for lack of data; the reports are published for anyone to read." },
    ],
  },
  "Bob Lazar": {
    intro: [
      "In 1989, Bob Lazar told a Las Vegas TV station he'd worked at 'S-4' near Area 51 reverse-engineering alien craft powered by 'element 115.' His account seeded much of modern UFO belief.",
      "The verifiable parts of his story don't check out, though he has never recanted.",
    ],
    points: [
      { title: "Element 115", they: "Lazar named element 115 years before science made it.", record: "Moscovium (element 115) was synthesized in 2003, but it's intensely radioactive and exists for milliseconds—nothing like Lazar's claimed stable reactor fuel; naming a then-theoretical element on the periodic table isn't secret knowledge." },
      { title: "His credentials", they: "He held degrees from MIT and Caltech and worked at Los Alamos.", record: "MIT and Caltech have no record of him; a Los Alamos phone directory listing indicates contractor work, not the physicist role claimed. In 35 years, no S-4 evidence or corroborating colleague has emerged." },
    ],
  },
  "ʻOumuamua": {
    intro: [
      "In 2017, astronomers detected the first confirmed interstellar object passing through our solar system—elongated, tumbling, and accelerating slightly without a visible comet tail. Harvard's Avi Loeb argued it could be alien technology.",
      "The anomaly is real; mainstream astronomy favors unusual but natural explanations.",
    ],
    points: [
      { title: "The non-gravitational push", they: "It sped up like a powered or sail-driven craft, not a rock.", record: "Comets accelerate the same way via outgassing; leading papers propose venting of hydrogen or nitrogen ice from an unusual body, which fits the push without a tail bright enough to see at that distance." },
      { title: "The probe hypothesis", they: "A respected astronomer says it might be a light-sail.", record: "Loeb's view is a genuine minority position; most of the field considers a natural interstellar fragment sufficient and simpler, and no signal, structure, or maneuver beyond the slight acceleration was ever detected." },
    ],
  },
  "The Vela incident": {
    intro: [
      "On 22 September 1979, a US Vela satellite detected a characteristic 'double flash' over the South Atlantic/Indian Ocean—the signature of a nuclear explosion. No nation claimed it, and its cause became a Cold War puzzle.",
      "This is a genuine, still-partly-classified mystery, with strong evidence pointing to a covert test.",
    ],
    points: [
      { title: "A secret nuclear test", they: "It was a covert Israeli–South African test, and the US covered it up.", record: "The Vela sensors were designed exactly to catch this signature; hydroacoustic data and later analyses lean toward a real low-yield test, and declassified documents show officials debating—and some downplaying—the finding under political pressure." },
      { title: "The satellite-glitch theory", they: "An official panel blamed a sensor artifact, case closed.", record: "A White House scientific panel did propose a micrometeoroid artifact, but critics note the panel faced diplomatic incentives to avoid confirming a test; much of the intelligence community disagreed. The truth remains genuinely unresolved." },
    ],
  },
  "Flight 19": {
    intro: [
      "On 5 December 1945, five US Navy Avenger torpedo bombers vanished on a training flight over the Atlantic, followed by a rescue plane—the founding legend of the Bermuda Triangle.",
      "Radio transcripts and the aircraft's known limits explain the loss without mystery.",
    ],
    points: [
      { title: "The vanishing", they: "Five planes and their rescuer disappeared in the Triangle at once.", record: "Radio logs record the flight leader's compass failure and growing disorientation, believing he was over the Keys while flying out to sea until fuel ran out at night in rough water—a documented navigation tragedy." },
      { title: "The lost rescue plane", they: "Even the search plane was taken.", record: "The PBM Mariner that vanished was a type nicknamed a 'flying gas tank' for fuel-vapor explosions; a ship reported an explosion and oil slick along its route. The wrecks lie in deep water and haven't been found." },
    ],
  },
  "SS Ourang Medan": {
    intro: [
      "A much-repeated horror story tells of a 1940s Dutch freighter whose entire crew was found dead, faces frozen in terror, after a chilling distress call—before the ship exploded and sank.",
      "The vessel may never have existed.",
    ],
    points: [
      { title: "The doomed crew", they: "Boarders found a ship full of terror-struck corpses.", record: "No ship named Ourang Medan appears in Lloyd's Register or Dutch shipping records, and no verified survivors, rescuers, or wreck exist; the tale traces to sensational 1940s–50s magazine serials." },
      { title: "The distress message", they: "'All officers dead… I die' was really transmitted.", record: "The story circulated via pulp publications and was later repeated in a CIA-employee's letter to a maritime magazine—repetition, not corroboration. It reads as maritime folklore, not a documented event." },
    ],
  },
  "The Carroll A. Deering": {
    intro: [
      "In January 1921, the five-masted schooner Carroll A. Deering ran aground off North Carolina's Outer Banks, sails set, meals reportedly being prepared, and her entire crew gone. It became a celebrated ghost-ship case, tangled into 'the year of vanishings.'",
      "Federal investigators suspected human causes and never resolved it.",
    ],
    points: [
      { title: "The empty ship", they: "A crew vanishes mid-meal—something supernatural took them.", record: "Multiple US agencies investigated, weighing mutiny and piracy (rum-runners or pirates were active); the crew and the ship's boats were gone, consistent with an abandonment or seizure, not a vanishing. It stays officially unsolved." },
      { title: "The wave of vanishings", they: "Dozens of ships disappeared at once in 1921.", record: "The supposed 'wave' bundles unrelated losses in a stormy period; the Deering itself is a real, single unsolved case, but the broader pattern dissolves into ordinary weather and wartime-era shipping losses." },
    ],
  },
  "The Flannan Isles keepers": {
    intro: [
      "In December 1900, three lighthouse keepers vanished from a remote Scottish island. An overturned chair, a stopped clock, and an unfinished log entry became famous eerie details.",
      "The official inquiry found a mundane, tragic cause—and some of the spooky details were later inventions.",
    ],
    points: [
      { title: "The abandoned station", they: "Three men vanished mid-task leaving an untouched, frozen scene.", record: "The inquiry found storm damage to equipment far above the normal high-water mark; the likely reconstruction is that a rogue wave swept the men away while they secured gear during a gale—two sets of oilskins were gone, one keeper left in shirtsleeves." },
      { title: "The stopped clock and log", they: "The strange log entries about a storm and 'crying' show terror.", record: "The dramatized log lines ('storm still raging… praying to God') come from a later poem and fiction, not the actual record; the official log showed nothing unusual before the men were lost." },
    ],
  },
  "MV Joyita": {
    intro: [
      "In 1955 the merchant vessel Joyita was found derelict in the South Pacific, her 25 passengers and crew gone, partly flooded but afloat—she'd been advertised as practically unsinkable.",
      "The inquiry found real mechanical trouble; why everyone left remains unexplained.",
    ],
    points: [
      { title: "Why abandon an unsinkable ship", they: "No one leaves a floating vessel unless forced by something.", record: "Investigators found a corroded pipe had flooded the engine room and the bilge pumps blocked; a panicked crew may have believed she was sinking. Cork-lined, she stayed afloat—so the abandonment looks like a fatal misjudgment." },
      { title: "The missing distress call", they: "The radio was set to distress but no one heard—suspicious.", record: "The radio was tuned to the international distress frequency but a wiring fault limited its range to ~2 miles; that explains the unheard call. Who gave the order to abandon, and how all 25 were lost, is the unsolved core." },
    ],
  },
  "The Devil's Sea": {
    intro: [
      "Japan's 'Dragon's Triangle' south of Tokyo is sometimes called a Pacific Bermuda Triangle where ships mysteriously vanish.",
      "The legend's headline evidence dissolves on inspection.",
    ],
    points: [
      { title: "The lost vessels", they: "Nine research ships and countless boats vanished in the zone.", record: "The famous 'nine research vessels' were fishing boats lost over years in documented storms, plus one lost to a volcanic eruption during a survey; the losses were spread out and explained, not a cluster." },
      { title: "The danger", they: "Something about the region swallows ships.", record: "It's a real area of active undersea volcanism and severe weather—genuinely hazardous in ordinary ways—but insurers price it normally and no anomalous loss rate exists. The 'triangle' framing came from popularizers." },
    ],
  },
  "The Beale ciphers": {
    intro: [
      "Three 19th-century ciphertexts are said to reveal the location of a buried Virginia treasure. One, decoded using the Declaration of Independence, describes the hoard; the other two remain unsolved.",
      "The whole affair may be a Gilded Age hoax.",
    ],
    points: [
      { title: "The buried treasure", they: "One solved cipher proves the system—crack the rest and you're rich.", record: "The story survives only in an 1885 pamphlet; statistical analysis of the 'solved' cipher suggests 19th-century English patterns and possibly a single author, and 140 years of digging has recovered nothing." },
      { title: "The unsolved ciphers", they: "Two ciphers still guard the gold's location.", record: "Ciphers 1 and 3 remain technically unbroken, which keeps a sliver of possibility alive; but if the tale is a fabrication, they may encode nothing—consistent with the hoax reading many cryptographers favor." },
    ],
  },
  "Kryptos": {
    intro: [
      "Kryptos, a 1990 sculpture in the CIA's own courtyard, carries four encrypted messages. Three were solved by the late 1990s; the fourth (K4) has resisted the world's codebreakers for over three decades.",
      "It is deliberate, sanctioned art—difficult by design, not a cover-up.",
    ],
    points: [
      { title: "The CIA can't read its own sculpture", they: "An unbroken code at spy HQ must hide something.", record: "Artist Jim Sanborn built K4 to be extremely hard and has released occasional clues ('BERLIN,' 'CLOCK'); he arranged for the solution to be revealed after his death. It's a puzzle, not classified intelligence." },
      { title: "What K4 says", they: "The final passage conceals a real secret.", record: "The three solved sections contain paraphrased and original text about concealment and discovery—evocative, not secret; K4 is expected to continue that theme. Sanborn has confirmed it's a genuine, solvable cipher." },
    ],
  },
  "The Somerton Man": {
    intro: [
      "In 1948, an unidentified man was found dead on an Adelaide beach, with a scrap reading 'Tamám Shud' ('it is ended') torn from a book of Persian poetry and an uncracked code in the same book—fueling spy theories for 70 years.",
      "DNA genealogy largely resolved the identity in 2022.",
    ],
    points: [
      { title: "The spy theory", they: "A poisoned Cold War agent with a secret code.", record: "In 2022, researchers using DNA and genealogy identified him as Carl 'Charles' Webb, a Melbourne electrical instrument maker estranged from his wife—consistent with a personal tragedy, not espionage; no poison was ever conclusively identified." },
      { title: "The code", they: "The letters in the book are an unbroken cipher.", record: "The jumbled letters remain unread and may be a one-time list or the doodles of a distressed man; with the body now likely identified, the 'code' lost its spy context, though it hasn't been definitively explained." },
    ],
  },
  "The Green Children of Woolpit": {
    intro: [
      "Two 12th-century English chronicles tell of a green-skinned boy and girl who appeared near the village of Woolpit, speaking an unknown language and eating only beans, before the girl assimilated and lost her color.",
      "Historians read immigrant orphans and a dietary condition, not otherworldly visitors.",
    ],
    points: [
      { title: "Otherworldly children", they: "Green skin and an unknown tongue mean they came from elsewhere.", record: "The likeliest reading: Flemish immigrant children, orphaned amid 12th-century persecution, speaking Flemish (unintelligible locally); 'green sickness' (chlorosis), an iron-deficiency anemia, tints skin green and fades with a normal diet—as the story describes." },
      { title: "The story's reliability", they: "Two chroniclers recorded it, so something real happened.", record: "Both wrote decades after the alleged events, drawing on hearsay; a kernel—lost, hungry, oddly-colored foreign children—could underlie a tale embroidered into legend over time." },
    ],
  },
  "Spring-heeled Jack": {
    intro: [
      "Victorian London buzzed with reports of 'Spring-heeled Jack,' a cloaked figure with fiery eyes who leapt impossible heights and breathed flame, terrorizing people from the 1830s onward.",
      "The record points to newspaper panic and penny-dreadful fiction, not a single leaping fiend.",
    ],
    points: [
      { title: "The leaping attacker", they: "Consistent reports over decades describe one supernatural being.", record: "Descriptions varied enormously—devil, ghost, foreigner, prankster—and shifted with each panic wave, the signature of a spreading legend; some incidents were likely real pranksters or assaults folded into one mythic figure." },
      { title: "His endurance", they: "He appeared for generations, so he was more than a man.", record: "Spring-heeled Jack became a penny-dreadful and stage-villain sensation, which fed fresh 'sightings'; the character outlived any individual because fiction and press kept reviving him." },
    ],
  },
  "The Cottingley Fairies": {
    intro: [
      "Between 1917 and 1920, two English cousins produced photographs of themselves with fairies. Arthur Conan Doyle championed them as genuine, and they fooled many for decades.",
      "The cousins later confessed—mostly.",
    ],
    points: [
      { title: "Real fairies on film", they: "Photo experts of the day couldn't find fakery.", record: "In 1983 the cousins, then elderly, admitted the fairies were paper cutouts copied from a popular children's book (Princess Mary's Gift Book) and held up with hatpins; the flat, fashionable figures match the source art." },
      { title: "The fifth photo", they: "Even after confessing, one cousin said the last image was real.", record: "Frances Griffiths maintained the fifth photo showed genuine fairies to the end—a poignant holdout—but no evidence supports it, and the first four are admitted fakes that fooled a credulous public." },
    ],
  },
  "The Devil's Footprints": {
    intro: [
      "In February 1855, after heavy snow, residents across Devon, England reported a trail of cloven, hoof-like prints running for many miles—over rooftops, walls, and haystacks—attributed to the Devil.",
      "The accounts are secondhand and grew in the telling; several natural culprits fit parts of it.",
    ],
    points: [
      { title: "The impossible trail", they: "A single continuous track crossed 100 miles and scaled walls—no animal could.", record: "Reports were collected secondhand and the '100 miles' figure aggregates many separate observations; candidates include hopping rodents or birds, escaped animals, and thaw-refreeze distorting ordinary tracks into 'hooves.'" },
      { title: "One creature", they: "The uniformity means one supernatural walker.", record: "Different observers described different spacings and shapes, suggesting multiple mundane causes lumped together under a sensational frame; it remains a genuine Victorian curiosity, not evidence of the Devil." },
    ],
  },
  "The Dancing Plague of 1518": {
    intro: [
      "In Strasbourg in July 1518, dozens—then reportedly hundreds—of people danced uncontrollably for days, some until they collapsed or died. It is one of the best-documented mass phenomena in history.",
      "The event is real; its cause is debated, with mass psychogenic illness leading.",
    ],
    points: [
      { title: "What caused it", they: "Only poisoning—ergot fungus—could make people dance to death.", record: "Ergot (which causes convulsions) is one hypothesis, but it typically impairs rather than enables sustained coordinated dancing; the leading explanation is mass psychogenic illness amid extreme famine-era stress and local saint-cult beliefs." },
      { title: "The deaths", they: "People literally danced themselves to death in the streets.", record: "The dancing is well-attested in city records; the death toll comes from a few later chronicles and may be exaggerated. That the outbreak happened is certain—the exact mechanism remains an honest open question." },
    ],
  },
  "The Pied Piper of Hamelin": {
    intro: [
      "The fairy tale of a piper who lures away a town's children after being cheated of his rat-catching fee has a startlingly specific origin: the German town of Hamelin records that 130 children were 'lost' in 1284.",
      "A real medieval event likely underlies the legend—though not the rats.",
    ],
    points: [
      { title: "A real disappearance", they: "The town's own records mourn 130 lost children.", record: "A 1300s church window and town chronicle do commemorate 130 children departing in 1284; historians take a real loss seriously—the rats and the revenge motif were added to the story only centuries later." },
      { title: "Where they went", they: "Something abducted or killed the children en masse.", record: "Leading theories: organized emigration/recruitment to settle lands in Eastern Europe (the 'piper' a recruiter, colors matching Hamelin surnames found in the region), or a disaster or plague; abduction by a magical piper is the folklore layer." },
    ],
  },
  "The Count of St. Germain": {
    intro: [
      "An 18th-century courtier, musician, and adventurer, the Count of St. Germain dazzled European society and inspired legends that he was thousands of years old and never aged.",
      "A real, documented man lies beneath an immortality myth built after his death.",
    ],
    points: [
      { title: "The deathless count", they: "He appeared across centuries, unchanged.", record: "Church records document his death in 1784 at Eckernförde; the 'immortal' sightings afterward come from later occult movements (notably Theosophy) that adopted him as an 'Ascended Master,' not from contemporaneous evidence." },
      { title: "His mysterious knowledge", they: "He spoke of ancient events as an eyewitness.", record: "He was a genuinely cultured polymath and self-mythologizer who cultivated an aura of antiquity—a common ploy among 18th-century adventurers; the tall tales were his own performance, then amplified posthumously." },
    ],
  },
  "Kaspar Hauser": {
    intro: [
      "In 1828 a teenage boy appeared in Nuremberg claiming to have grown up in total isolation in a dark cell. Rumors made him the hidden heir to the House of Baden, murdered to protect a succession.",
      "Modern DNA testing weakened the royal theory, leaving his identity unknown.",
    ],
    points: [
      { title: "The lost prince", they: "He was the swapped-out heir of Baden, killed to keep the secret.", record: "DNA analyses (including 2024 work) of relics attributed to him do not match the Baden line, undercutting the prince theory; historians increasingly doubt the whole aristocratic-conspiracy framing." },
      { title: "His death", they: "He was assassinated by agents guarding the secret.", record: "Hauser died in 1833 of a stab wound he attributed to an attacker; some historians think it was self-inflicted (accidentally or as a hoax gone wrong). Who he really was, and how he died, remain genuinely unresolved." },
    ],
  },
  "The Princes in the Tower": {
    intro: [
      "In 1483, the boy-king Edward V and his younger brother were lodged in the Tower of London by their uncle, who took the throne as Richard III—and then vanished from the record. Their fate is England's most famous royal cold case.",
      "Murder on Richard's watch is the traditional reading; escape theories and untested bones keep it open.",
    ],
    points: [
      { title: "Richard murdered them", they: "He had the motive and means; Thomas More and Shakespeare say so.", record: "The boys disappear in 1483 and Richard never produced them to quell rumors—strong circumstantial grounds—but the vivid confessions come from later Tudor-era sources with reason to blacken him; no bodies were confirmed at the time." },
      { title: "Did they survive?", they: "Pretenders like Perkin Warbeck claimed to be the younger prince.", record: "Bones found in 1674 and reburied have never been DNA-tested (permission has been refused), so identity is unconfirmed; the survival claims are unproven. It's a genuinely open historical mystery pending forensic access." },
    ],
  },
  "The Ninth Legion": {
    intro: [
      "Rome's Ninth Legion (Legio IX Hispana) is famous for supposedly marching into Scotland around 120 CE and being annihilated, then erased from the records—immortalized in novels and film.",
      "The disappearance from the record is real; the massacre is not established.",
    ],
    points: [
      { title: "Wiped out in Scotland", they: "The legion vanished fighting the Caledonians and was struck from history.", record: "There's no record of a Scottish destruction; the dramatic 'lost in the mists' story is largely 20th-century fiction. Tile stamps place elements of the Ninth at Nijmegen in the Netherlands around 120 CE, after its supposed doom." },
      { title: "What happened to it", they: "Its erasure proves a covered-up catastrophe.", record: "The legion simply drops from surviving records after the 120s—common for units that were disbanded, renamed, or destroyed later in the East (perhaps a Parthian or Bar Kokhba war); historians debate which, with no Scottish massacre needed." },
    ],
  },
  "The Sea Peoples": {
    intro: [
      "Around 1200 BCE, the great civilizations of the eastern Mediterranean collapsed almost together. Egyptian records blame mysterious raiders—the 'Sea Peoples'—whose identity has been argued for over a century.",
      "The raiders were real; pinning the collapse solely on them is the overreach.",
    ],
    points: [
      { title: "A mystery armada", they: "An unknown seafaring horde destroyed every Bronze Age empire at once.", record: "Egyptian reliefs at Medinet Habu do document real coalition raiders—but the Late Bronze Age Collapse is now attributed to a 'perfect storm' of drought, earthquakes, famine, and systems failure, with the Sea Peoples as one factor among several." },
      { title: "Who they were", they: "Their origin is deliberately obscured.", record: "The identity is genuinely debated—candidates include displaced Aegean, Anatolian, and central Mediterranean peoples (names like Peleset, Sherden, Shekelesh)—reflecting real scholarly uncertainty, not concealment." },
    ],
  },
  "The Copper Scroll": {
    intro: [
      "Among the Dead Sea Scrolls, one is unique: engraved on copper and listing 64 locations of hidden gold and silver—vast quantities, possibly Temple treasure.",
      "The scroll is real and public; the treasure has never been found.",
    ],
    points: [
      { title: "The hidden treasure", they: "A real inventory of Temple gold still waits at 64 sites.", record: "The scroll is genuine, on display in Jordan, and translated—but its landmarks ('under the third stone,' etc.) reference places lost to time; nothing on the list has ever been recovered, and the amounts may be exaggerated or symbolic." },
      { title: "What it is", they: "Only a true treasure map gets etched in copper.", record: "The durable medium is striking and debated—some scholars read a real Essene or Temple cache, others a folkloric or aspirational list; its purpose is genuinely unresolved, which is the honest state of the question." },
    ],
  },
  "Nan Madol": {
    intro: [
      "On the Pacific island of Pohnpei stands Nan Madol—a city of nearly 100 artificial islets built from enormous basalt 'logs,' some weighing many tons, laid over a reef. Local legend says the stones were flown into place by magic.",
      "It's a real, datable achievement; the logistics are debated but earthbound.",
    ],
    points: [
      { title: "Moving the basalt", they: "750,000 tons of stone columns couldn't be placed by islanders.", record: "Built by the Saudeleur dynasty from around 1180 CE; the columnar basalt occurs naturally nearby and can be rafted and levered into place. Experiments show the methods are feasible, though moving the largest columns remains honestly debated." },
      { title: "The magic legend", they: "Oral tradition says sorcerers levitated the stones.", record: "The flying-stones story is local myth, as many cultures explain monumental ancestors' works; the archaeology shows quarrying, transport by water, and stacking—impressive engineering by a real Pacific society." },
    ],
  },
  "The Kensington Runestone": {
    intro: [
      "A Minnesota farmer reported unearthing a rune-carved stone in 1898 that seemed to record a Norse expedition in 1362—evidence, some say, of Vikings deep in North America.",
      "Genuine Norse presence exists elsewhere, but this stone looks like a 19th-century carving.",
    ],
    points: [
      { title: "Medieval Vikings in Minnesota", they: "The runic inscription dates a 1362 Norse party.", record: "Runologists identify 19th-century Scandinavian language features and letter forms in the text, inconsistent with 1362; it fits the finder's Nordic-immigrant community and the era's enthusiasm for a Norse-discovery narrative." },
      { title: "Norse in America", they: "So the Vikings really did reach the heartland.", record: "The Norse genuinely reached North America—but at L'Anse aux Meadows in Newfoundland (verified c. 1000 CE), not inland Minnesota; the Kensington stone is considered a modern creation, not evidence of that real voyage." },
    ],
  },
  "The Vinland Map": {
    intro: [
      "Unveiled by Yale in 1965, the Vinland Map appeared to show the American northeast decades before Columbus, seemingly proving Norse knowledge on parchment.",
      "It is now conclusively a forgery.",
    ],
    points: [
      { title: "A pre-Columbian map", they: "It shows 'Vinland' and predates Columbus's voyages.", record: "Yale's own 2021 analysis found titanium-compound ink (a 20th-century material) throughout the map, including under the medieval-looking lines; the university officially declared it a fake." },
      { title: "Norse discovery", they: "The map confirms Vikings mapped America.", record: "Norse voyages to Vinland are real and archaeologically proven at L'Anse aux Meadows—but that case rests on excavation, not this map; the forgery, if anything, muddied a true story with a false document." },
    ],
  },
  "The Miracle of the Sun": {
    intro: [
      "On 13 October 1917 at Fátima, Portugal, a crowd said to number 70,000 had gathered on the prediction of three shepherd children; many reported the sun spinning, changing color, and plunging toward earth.",
      "The event is a serious question for psychology and faith; accounts conflict.",
    ],
    points: [
      { title: "The dancing sun", they: "Tens of thousands witnessed a solar miracle on a predicted date.", record: "Reports vary widely—some in the crowd saw nothing—and no observatory anywhere recorded solar movement; staring near the sun produces documented afterimages and optical effects, and expectant crowds are prone to shared perception." },
      { title: "The prediction", they: "The children foretold the exact day and hour.", record: "The children did promise a sign that day, drawing the crowd—but a promised event that then relies on subjective sky-watching is different from a measured astronomical one; what many sincerely experienced remains genuinely studied and debated." },
    ],
  },
  "Baba Vanga": {
    intro: [
      "Vangelia Gushterova, a blind Bulgarian woman who died in 1996, is credited with prophecies said to include the Kursk submarine disaster, 9/11, and a long calendar of future catastrophes.",
      "Her most-quoted 'hits' appear only after the events, and dated predictions keep failing.",
    ],
    points: [
      { title: "The famous hits", they: "She predicted Kursk and 9/11 with eerie accuracy.", record: "The specific, quotable versions of these prophecies surface in print only after the events; no contemporaneous, documented record of them predicting the future exists—the hallmark of retroactive attribution." },
      { title: "The future forecasts", they: "Her dated predictions warn of coming disasters.", record: "Her attributed year-by-year predictions (assorted wars, cataclysms) routinely pass without occurring; the ones that 'came true' are vague or backfilled, while the falsifiable dated ones fail on schedule." },
    ],
  },
  "The Simpsons predictions": {
    intro: [
      "Fans credit The Simpsons with predicting Donald Trump's presidency, smartwatches, video calls, and disasters—supposedly too precise for coincidence.",
      "Volume and satire, plus doctored images, explain the 'prophecies.'",
    ],
    points: [
      { title: "Too accurate to be chance", they: "Decades of specific hits reveal foreknowledge.", record: "Over 750 episodes of topical, tech-aware satire since 1989 generate matches by sheer volume; writers extrapolated obvious trends (video phones, smartwatches). Survivorship bias means we remember hits and forget the misses." },
      { title: "The Trump 'prediction'", they: "They showed President Trump years in advance.", record: "The Trump-presidency gag aired in 2000 as satire of a plausible absurdity (he'd publicly mused about running); the famous 'Trump on the escalator' image is a fan-made edit, and other viral 'predictions' are routinely doctored." },
    ],
  },
  "The Utsuro-bune": {
    intro: [
      "Several Edo-period Japanese texts describe a hollow, round vessel that drifted ashore around 1803 carrying a strange woman with unfamiliar features and unreadable script—cited today as an early 'close encounter.'",
      "The tale survives only in folklore-style retellings with shifting details.",
    ],
    points: [
      { title: "An ancient UFO", they: "The saucer-like craft and mysterious woman describe a real encounter.", record: "The story appears in a handful of 19th-century illustrated collections that mix fact and legend, with inconsistent details and no official or physical record; folklorists treat it as a legend, possibly seeded by a real foreign castaway in an unusual boat." },
      { title: "The unreadable script", they: "Strange symbols inside prove non-human origin.", record: "The 'symbols' differ between versions of the tale, and a drifting foreigner with unfamiliar writing (Russian, say, in an era of Japanese isolation) could inspire the wonder; it reads as an intriguing folk story, not documented contact." },
    ],
  },
  "The Taos Hum": {
    intro: [
      "Residents of Taos, New Mexico—and towns worldwide—report a faint, persistent low-frequency drone that many can't escape, blamed on secret infrastructure, weapons, or industry.",
      "Investigations find a real experience with likely internal or subtle-environmental origins.",
    ],
    points: [
      { title: "An external source", they: "A hidden machine or signal is broadcasting the hum.", record: "A 1990s study found only about 2% of Taos residents heard it and detected no common external acoustic source; 'hum' reports worldwide rarely share a physical signal, pointing away from one broadcast cause." },
      { title: "Is it real?", they: "Sufferers aren't imagining a torment that disrupts their lives.", record: "The distress is real: leading explanations include otoacoustic emissions (the ear generating faint sound) and heightened sensitivity to low-frequency background noise; the experience is genuine even where no external hum is measurable." },
    ],
  },
  "The Marfa Lights": {
    intro: [
      "Near Marfa, Texas, mysterious glowing lights are seen dancing over the desert at night, drawing crowds to a dedicated viewing platform and inspiring ghost and UFO lore.",
      "A physics study tied the modern lights to a very earthly source.",
    ],
    points: [
      { title: "Ghost lights", they: "The lights have been seen since frontier days and defy explanation.", record: "A University of Texas–Dallas physics group tracked the nightly lights and found they correlate precisely with car headlights on Highway 67, refracted and mirage-shifted through desert temperature layers; pre-automobile accounts are sparse and anecdotal." },
      { title: "Not all of them", they: "Even if some are cars, others aren't explained.", record: "Occasional non-traffic sightings may be campfires, other vehicles, or atmospheric mirages; no residual class has resisted mundane explanation under study, though the desert's mirage conditions make it a genuinely fun optical puzzle." },
    ],
  },
  "The Hessdalen Lights": {
    intro: [
      "In Norway's Hessdalen valley, recurring luminous orbs have appeared for decades—and unusually, scientists agree there's a real, unexplained phenomenon worth studying.",
      "This is a case the record treats as an open scientific question, not a debunk.",
    ],
    points: [
      { title: "Something real is there", they: "The lights are genuine and no one can explain them.", record: "Correct: an automated research station ('Project Hessdalen') has recorded the lights since 1984, and scientists openly study them; hypotheses range from ionized dust plasmas to a natural battery effect in the valley's mineralogy." },
      { title: "What causes them", they: "The mystery means it must be exotic.", record: "'Unexplained' here means mechanism-not-yet-confirmed, not supernatural; candidate physical explanations are being tested with instruments—an example of an anomaly handled by science rather than folklore." },
    ],
  },
  "Ball lightning": {
    intro: [
      "For centuries, people reported glowing spheres drifting through storms, into houses, and down aircraft aisles—long dismissed by scientists as impossible or imagined.",
      "The record here vindicated the witnesses: ball lightning is now accepted, if not fully explained.",
    ],
    points: [
      { title: "Does it exist?", they: "Too many credible witnesses across centuries to be nothing.", record: "Science now accepts it: in 2014 a Chinese team accidentally captured a natural ball-lightning event on spectrograph during field studies, providing hard data after generations of anecdote." },
      { title: "What it is", they: "Its behavior is so strange it must be exotic.", record: "The mechanism is genuinely unsettled—a leading theory is vaporized silicon from ground strikes burning as a glowing ball—so it's a real phenomenon with an honest open question at its center, not the paranormal." },
    ],
  },
  "The Toynbee tiles": {
    intro: [
      "Since the 1980s, cryptic license-plate-sized tiles bearing messages about resurrecting the dead 'on planet Jupiter' have been embedded in streets across US and South American cities.",
      "The tiles are real and their maker is strongly suspected but unconfirmed.",
    ],
    points: [
      { title: "Who makes them", they: "A shadowy network plants coded messages in the pavement.", record: "Hundreds of tiles are genuinely documented; the 2011 film Resurrect Dead builds a strong circumstantial case for one reclusive Philadelphia man, but it's never been confirmed, and tiles have continued appearing." },
      { title: "The meaning", they: "The Jupiter-resurrection text hides a real doctrine.", record: "The tiles reference a Toynbee/Kubrick '2001' idea about reviving the dead on Jupiter—an eccentric personal obsession rather than a group creed; the enduring mystery is the anonymous maker and method, not a conspiracy." },
    ],
  },
};
