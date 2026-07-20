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
  "The Mandela Effect": {
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
  "The Wow! signal": {
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
};
