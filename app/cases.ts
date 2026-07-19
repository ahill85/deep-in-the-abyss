export type CaseFile = {
  slug: string;
  title: string;
  question: string;
  category: string;
  status: string;
  reviewed: string;
  conventional: string;
  alternative: string;
  evidence: string;
  tone: string;
  readTime: string;
  overview: string;
  confidence: string;
  verdict: string;
  sharedFacts: string[];
  unresolved: string[];
  timeline: { date: string; event: string; status: "Confirmed" | "Reported" | "Disputed" }[];
  evidenceCards: { title: string; supports: string; strength: string; detail: string; counter: string; sourceIds: string[] }[];
  sources: { id: string; title: string; publisher: string; type: string; url: string }[];
};

export const cases: CaseFile[] = [
  {
    slug: "jfk", title: "JFK Assassination", question: "Did Lee Harvey Oswald act alone?", category: "Historical events", status: "Disputed", reviewed: "July 2026", conventional: "The Warren Commission concluded that Lee Harvey Oswald fired three shots from the Texas School Book Depository, killing President Kennedy and wounding Governor Connally, and found no evidence that Oswald or Jack Ruby belonged to a conspiracy.", alternative: "Critics point to incomplete early investigations, disputed witness and medical evidence, intelligence-agency secrecy, and the House committee’s later acoustic analysis as reasons to suspect additional involvement.", evidence: "Extensive primary record", tone: "amber", readTime: "18 min",
    overview: "President John F. Kennedy was shot in Dallas on 22 November 1963. Oswald was arrested that day and killed by Jack Ruby two days later, preventing a trial. Two major federal inquiries agreed that Oswald fired at Kennedy but differed on whether a conspiracy was probable. The surviving record is unusually large—and also contains acknowledged investigative failures.",
    confidence: "Moderate",
    verdict: "The physical and documentary record strongly connects Oswald and his rifle to the shooting. A broader conspiracy has never been demonstrated with comparable evidence. However, the FBI, CIA, and Secret Service did not initially provide a complete record, and the absence of a trial left important claims permanently contested.",
    sharedFacts: ["Kennedy and Connally were struck while the motorcade passed the Depository.", "Oswald worked in the building and left after the shooting.", "A Mannlicher–Carcano rifle linked to Oswald was recovered on the sixth floor.", "Ruby killed Oswald in police custody on 24 November 1963."],
    unresolved: ["Whether every relevant intelligence record was promptly supplied to investigators.", "How much weight should be given to witness recollections that conflict with physical evidence.", "Whether new archival releases change context without changing the core shooting evidence."],
    timeline: [
      { date: "22 Nov 1963", event: "Kennedy is shot at 12:30 p.m.; Oswald is arrested later that day.", status: "Confirmed" },
      { date: "24 Nov 1963", event: "Jack Ruby shoots Oswald during a live television transfer.", status: "Confirmed" },
      { date: "24 Sep 1964", event: "The Warren Commission reports that Oswald acted alone.", status: "Confirmed" },
      { date: "1979", event: "The House Select Committee says Kennedy was probably killed as a result of a conspiracy, relying heavily on disputed acoustic evidence.", status: "Reported" },
      { date: "18 Mar 2025", event: "Previously classified JFK collection records are released by the National Archives.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "The rifle and cartridge cases", supports: "Conventional", strength: "Strong", detail: "Investigators recovered a Carcano rifle and three cartridge cases from the Depository. Documentary and photographic evidence linked the rifle purchase to Oswald.", counter: "Critics dispute parts of the handling and chain of custody, but no rival weapon has been tied to the shooting with equivalent evidence.", sourceIds: ["jfk-wc"] },
      { title: "Oswald’s location and conduct", supports: "Conventional", strength: "Moderate", detail: "Oswald worked in the building, left shortly after the shooting, and was arrested after Officer J. D. Tippit was killed.", counter: "Presence and suspicious conduct are not by themselves proof of firing the shots.", sourceIds: ["jfk-wc", "jfk-nara"] },
      { title: "Dictabelt acoustic analysis", supports: "Alternative", strength: "Limited", detail: "The House committee relied on an acoustic study to conclude there was probably a second shooter and therefore a conspiracy.", counter: "Later scientific review challenged the timing and identification of the recorded impulses; the acoustic claim remains heavily disputed.", sourceIds: ["jfk-hsca"] },
      { title: "Agency disclosure failures", supports: "Alternative", strength: "Moderate", detail: "Later review established that relevant agency activity and records were not fully surfaced during the earliest investigation.", counter: "Secrecy and investigative failure increase uncertainty but do not identify another shooter or prove coordination.", sourceIds: ["jfk-arrb", "jfk-2025"] }
    ],
    sources: [
      { id: "jfk-wc", title: "Report of the President’s Commission on the Assassination of President Kennedy", publisher: "U.S. National Archives", type: "Official investigation", url: "https://www.archives.gov/research/jfk/warren-commission-report" },
      { id: "jfk-hsca", title: "House Select Committee on Assassinations report", publisher: "U.S. National Archives", type: "Congressional investigation", url: "https://www.archives.gov/research/jfk/select-committee-report" },
      { id: "jfk-arrb", title: "Assassination Records Review Board final report", publisher: "U.S. National Archives", type: "Official review", url: "https://www.archives.gov/files/research/jfk/review-board/report/arrb-final-report.pdf" },
      { id: "jfk-nara", title: "Warren Commission records introduction", publisher: "U.S. National Archives", type: "Archive guide", url: "https://www.archives.gov/research/jfk/warren-commission-report/intro" },
      { id: "jfk-2025", title: "JFK Assassination Records—2025 release", publisher: "U.S. National Archives", type: "Primary document collection", url: "https://www.archives.gov/research/jfk/release-2025" }
    ]
  },
  {
    slug: "mh370", title: "Malaysia Airlines MH370", question: "What caused the aircraft to disappear?", category: "Missing persons & transport", status: "Unresolved", reviewed: "July 2026", conventional: "Radar, satellite handshakes, fuel modelling, and recovered debris indicate the Boeing 777 reversed course, flew for hours, and ended in the southern Indian Ocean after fuel exhaustion. The official investigation could not determine who diverted it or why.", alternative: "Competing scenarios include deliberate pilot action, hijacking, fire, depressurization, interception, and proposed crash locations outside the principal search zone. Some fit portions of the data, but none explains the complete record conclusively.", evidence: "Strong location clues; cause unknown", tone: "red", readTime: "20 min",
    overview: "MH370 left Kuala Lumpur for Beijing with 239 people aboard on 8 March 2014. Its transponder stopped transmitting, military radar tracked a westward turn, and the satellite terminal continued exchanging automated signals for roughly seven hours. Confirmed and highly likely aircraft debris later reached western Indian Ocean shores, but the main wreckage and recorders have not been recovered.",
    confidence: "High that it ended in the southern Indian Ocean; low on cause",
    verdict: "The southern Indian Ocean conclusion rests on several independent evidence lines and is much stronger than claims that the aircraft landed secretly or was replaced. The cause remains genuinely unresolved: without the wreckage, cockpit voice recorder, and flight data recorder, deliberate and accidental scenarios cannot be ranked with high confidence.",
    sharedFacts: ["The aircraft stopped normal secondary-radar transmission after its last radio exchange.", "Military radar data indicated a turn back across the Malay Peninsula.", "The satellite terminal exchanged automated signals until 00:19 UTC.", "A flaperon and other debris were confirmed or assessed as almost certainly from MH370."],
    unresolved: ["Who changed the aircraft’s course and whether the diversion was intentional.", "The exact flight path and impact point along the final satellite arc.", "What happened inside the aircraft during the final hours."],
    timeline: [
      { date: "8 Mar 2014", event: "MH370 departs Kuala Lumpur; contact is lost and the aircraft turns west.", status: "Confirmed" },
      { date: "24 Mar 2014", event: "Malaysia announces satellite analysis places the end of the flight in the southern Indian Ocean.", status: "Reported" },
      { date: "Jul 2015", event: "A flaperon is found on Réunion and later confirmed as originating from MH370.", status: "Confirmed" },
      { date: "3 Oct 2017", event: "ATSB publishes its operational search report after 120,000 km² of seabed searching.", status: "Confirmed" },
      { date: "30 Jul 2018", event: "Malaysia releases its safety investigation report without determining the cause.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "Satellite handshake arcs", supports: "Southern Indian Ocean", strength: "Strong", detail: "Inmarsat signal timing and frequency data constrained the aircraft to distance arcs and supported a long southbound flight after radar contact ended.", counter: "The data do not yield a unique track; speed, altitude, winds, and terminal behaviour create location uncertainty.", sourceIds: ["mh-atsb"] },
      { title: "Recovered debris", supports: "Southern Indian Ocean", strength: "Strong", detail: "A right flaperon was confirmed as MH370 debris, and several other pieces were confirmed or judged almost certainly from the aircraft.", counter: "Drift modelling is sensitive to ocean conditions and cannot identify a precise impact point.", sourceIds: ["mh-debris", "mh-atsb"] },
      { title: "Manual course changes", supports: "Deliberate diversion", strength: "Moderate", detail: "The turn back and subsequent path were difficult to reconcile with the planned route and included changes consistent with aircraft control inputs.", counter: "Control inputs do not identify the person responsible, motive, or whether an emergency shaped later events.", sourceIds: ["mh-malaysia"] },
      { title: "Absence of main wreckage", supports: "Alternative search areas", strength: "Limited", detail: "The initial high-priority underwater search did not locate the aircraft, showing that the modeled track or impact assumptions were incomplete.", counter: "A failed search does not negate satellite and debris evidence; the ocean search area was enormous and difficult.", sourceIds: ["mh-atsb"] }
    ],
    sources: [
      { id: "mh-atsb", title: "The Operational Search for MH370", publisher: "Australian Transport Safety Bureau", type: "Official search report", url: "https://www.atsb.gov.au/sites/default/files/media/5773565/operational-search-for-mh370_final_3oct2017.pdf" },
      { id: "mh-debris", title: "MH370—Search and debris examination update", publisher: "Australian Transport Safety Bureau", type: "Official technical report", url: "https://www.atsb.gov.au/sites/default/files/media/5773389/ae-2014-054_mh370-search-and-debris-update_aug2017.pdf" },
      { id: "mh-reports", title: "MH370 operational search reports", publisher: "Australian Transport Safety Bureau", type: "Report collection", url: "https://www.atsb.gov.au/mh370-operational-search-reports" },
      { id: "mh-malaysia", title: "MH370 Safety Investigation Report release", publisher: "Malaysia Ministry of Transport", type: "Official investigation", url: "https://www.mot.gov.my/en/Kenyataan%20Media/Year%202018/YBMOT%20Media%20Statement%20MH370%20Safety%20Investigation%20Report.pdf" }
    ]
  },
  {
    slug: "moon", title: "The Moon Landing", question: "Did Apollo 11 land on the Moon?", category: "Space & UFOs", status: "Explained", reviewed: "July 2026", conventional: "Apollo 11 landed astronauts on the Moon in July 1969. The mission is supported by telemetry, tracking, returned samples, photographs, surface experiments, hardware still visible from lunar orbit, and continuing laser measurements.", alternative: "Hoax claims interpret photographic lighting, the moving flag, radiation exposure, and the absence of stars as evidence that footage was staged. These observations have ordinary photographic, mechanical, and mission-design explanations.", evidence: "Multiple independent evidence lines", tone: "green", readTime: "14 min",
    overview: "Apollo 11 launched on 16 July 1969. Neil Armstrong and Buzz Aldrin landed the lunar module Eagle in Mare Tranquillitatis while Michael Collins remained in orbit. The crew returned samples and deployed experiments. Five later Apollo missions also landed. The evidence is not a single NASA photograph: it includes physical materials, equipment measured today, and observations made across decades.",
    confidence: "Very high",
    verdict: "The landing is confirmed beyond reasonable historical and scientific doubt. Hoax arguments isolate visual details while failing to explain the combined record: tracked spacecraft, lunar samples studied internationally, working reflectors, six landing missions, and later orbital images of hardware and surface tracks.",
    sharedFacts: ["Apollo 11 launched on a Saturn V and returned three astronauts safely.", "The mission broadcast television and radio transmissions.", "Lunar material attributed to Apollo was distributed to researchers.", "Retroreflectors at Apollo sites are still used for lunar ranging."],
    unresolved: ["Minor historical details in mission recollections and archival labelling.", "How best to preserve the landing sites from future disturbance.", "None of the unresolved issues materially challenges whether the landings occurred."],
    timeline: [
      { date: "16 Jul 1969", event: "Apollo 11 launches from Kennedy Space Center.", status: "Confirmed" },
      { date: "20 Jul 1969", event: "Eagle lands; Armstrong and Aldrin begin the first crewed lunar surface visit.", status: "Confirmed" },
      { date: "24 Jul 1969", event: "The crew splashes down in the Pacific with lunar samples.", status: "Confirmed" },
      { date: "2009", event: "Lunar Reconnaissance Orbiter begins imaging Apollo landing hardware and tracks.", status: "Confirmed" },
      { date: "2023–2024", event: "Spacecraft-based laser ranging measures Apollo 11 and 14 reflector arrays.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "Returned lunar samples", supports: "Conventional", strength: "Strong", detail: "Apollo missions returned 382 kilograms of material with mineral, isotope, and exposure characteristics consistent with lunar origin.", counter: "Hoax accounts propose robotic collection or substituted meteorites, but these do not match the quantity, geological context, or documented distribution.", sourceIds: ["moon-apollo"] },
      { title: "Landing-site imagery", supports: "Conventional", strength: "Strong", detail: "LRO images show descent stages, experiment packages, and disturbed regolith tracks at Apollo sites.", counter: "Images are NASA-operated data, but they agree with decades-old site plans and are only one part of the evidence.", sourceIds: ["moon-lro"] },
      { title: "Laser retroreflectors", supports: "Conventional", strength: "Strong", detail: "Apollo 11, 14, and 15 reflector arrays remain measurable and support precision lunar-ranging science.", counter: "Soviet robotic missions also placed reflectors, so a reflector alone does not prove a crew—but its location supports the mission record.", sourceIds: ["moon-laser", "moon-orbit"] },
      { title: "Photographic anomalies", supports: "Alternative", strength: "Unsupported", detail: "Claims cite nonparallel shadows, a waving flag, crosshair artefacts, and a black sky without stars.", counter: "Uneven terrain, perspective, flag motion in vacuum, overexposure, and camera dynamic range explain these effects without a studio.", sourceIds: ["moon-apollo"] }
    ],
    sources: [
      { id: "moon-apollo", title: "Apollo 11 Mission Overview", publisher: "NASA", type: "Mission record", url: "https://www.nasa.gov/history/apollo-11-mission-overview/" },
      { id: "moon-lro", title: "Apollo 11 Landing Site", publisher: "NASA Earth Observatory", type: "Orbital imagery", url: "https://science.nasa.gov/earth/earth-observatory/apollo-11-landing-site-39408/" },
      { id: "moon-laser", title: "Apollo and Luna reflectors", publisher: "International Laser Ranging Service / NASA GSFC", type: "Scientific instrument record", url: "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html" },
      { id: "moon-orbit", title: "First spacecraft-based laser ranging to lunar surface reflectors", publisher: "NASA Goddard", type: "Scientific dataset summary", url: "https://pgda.gsfc.nasa.gov/products/100" }
    ]
  },
  {
    slug: "roswell", title: "Roswell", question: "What crashed near Roswell in 1947?", category: "Space & UFOs", status: "Mostly explained", reviewed: "July 2026", conventional: "The recovered debris most likely came from a Project MOGUL balloon train designed to detect evidence of Soviet nuclear tests. Secrecy around the classified purpose helped produce inconsistent public explanations.", alternative: "Witnesses and later accounts describe unusual material, military retrieval activity, and—in stories that emerged decades later—bodies or a non-human craft. Advocates argue the balloon explanation was itself a cover story.", evidence: "Documents strong; testimony disputed", tone: "green", readTime: "16 min",
    overview: "In July 1947, rancher W. W. Brazel found scattered debris near Corona, New Mexico. Roswell Army Air Field briefly announced recovery of a ‘flying disc’ before identifying the material as a weather balloon. The modern alien-crash narrative grew substantially after 1978, when new interviews revived the story. Official inquiries later linked the debris to the then-classified MOGUL program.",
    confidence: "High for balloon debris; low for later body stories",
    verdict: "Project MOGUL best explains the physical debris, location, timing, and institutional secrecy. The Army’s contradictory 1947 messaging reasonably created suspicion. Later body-recovery accounts are harder to reconcile with the chronology and often appeared decades after the event.",
    sharedFacts: ["Debris was collected from a ranch northwest of Roswell in July 1947.", "The Army issued and quickly retracted a ‘flying disc’ press release.", "The United States was operating classified high-altitude balloon research in New Mexico.", "Alien-body claims became prominent long after 1947."],
    unresolved: ["Why the initial press release used the phrase ‘flying disc.’", "Which exact MOGUL flight produced the debris.", "How memory, publicity, and classified activity shaped later witness accounts."],
    timeline: [
      { date: "Jun–Jul 1947", event: "Brazel discovers a wide field of lightweight debris on ranch land.", status: "Reported" },
      { date: "8 Jul 1947", event: "Roswell Army Air Field announces a flying disc, then higher command displays balloon material.", status: "Confirmed" },
      { date: "1978", event: "Former intelligence officer Jesse Marcel’s interview revives the story as an extraterrestrial crash.", status: "Reported" },
      { date: "1994", event: "The Air Force concludes the debris was consistent with Project MOGUL.", status: "Confirmed" },
      { date: "1997", event: "A follow-up Air Force report addresses later claims involving bodies.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "Project MOGUL records", supports: "Conventional", strength: "Strong", detail: "Program records document balloon trains with radar targets and acoustic equipment operating from New Mexico during the relevant period.", counter: "The absence of an unambiguous surviving launch record for the exact debris field leaves room for dispute over flight identification.", sourceIds: ["roswell-af", "roswell-report"] },
      { title: "The changing Army explanation", supports: "Alternative", strength: "Moderate", detail: "The immediate switch from ‘flying disc’ to weather balloon is a documented contradiction that damaged official credibility.", counter: "Confusion and protection of a classified program can explain the switch without requiring an extraterrestrial craft.", sourceIds: ["roswell-af"] },
      { title: "Descriptions of unusual debris", supports: "Alternative", strength: "Limited", detail: "Some witnesses later described thin, strong, memory-like material and unfamiliar markings.", counter: "Accounts changed over decades and can resemble foil, tape, and radar-target components; no testable sample is publicly available.", sourceIds: ["roswell-report"] },
      { title: "Alien-body accounts", supports: "Alternative", strength: "Very limited", detail: "Later witnesses described small bodies or military recovery operations.", counter: "The claims appeared late, conflict in detail, and are not supported by contemporaneous physical records.", sourceIds: ["roswell-caseclosed"] }
    ],
    sources: [
      { id: "roswell-af", title: "The Roswell Report", publisher: "U.S. Air Force", type: "Official investigation", url: "https://www.af.mil/The-Roswell-Report/quot/" },
      { id: "roswell-report", title: "The Roswell Report: Fact versus Fiction in the New Mexico Desert", publisher: "Air Force History", type: "Document collection", url: "https://www.dafhistory.af.mil/Portals/16/documents/AFD-101201-038.pdf" },
      { id: "roswell-caseclosed", title: "The Roswell Report: Case Closed", publisher: "U.S. Air Force", type: "Follow-up report", url: "https://www.secretsdeclassified.af.mil/Portals/67/documents/AFD-100713-052.pdf" }
    ]
  },
  {
    slug: "dyatlov", title: "Dyatlov Pass", question: "Why did nine hikers leave their tent?", category: "Unexplained phenomena", status: "Mostly explained", reviewed: "July 2026", conventional: "A delayed slab avalanche or threatening snow movement prompted the group to cut out of the tent. Darkness, wind, extreme cold, injuries, and failed attempts to return then produced death by trauma and hypothermia.", alternative: "Theories invoke military testing, conflict, infrasound, katabatic wind, or an unknown attacker, citing the tent exit, traumatic injuries, missing clothing, and reported lights.", evidence: "Natural mechanism plausible", tone: "green", readTime: "17 min",
    overview: "Nine experienced ski hikers died in the northern Urals in February 1959. Their tent was found cut from inside; bodies were located between the tent and a forest shelter, some with severe injuries. Soviet investigators used the vague phrase ‘compelling natural force.’ Modern snow modelling shows that a small delayed slab avalanche is physically plausible even though the site did not resemble a classic large-avalanche path.",
    confidence: "Moderate",
    verdict: "A snow-triggered evacuation followed by exposure and injuries presently explains the evidence with the fewest unsupported assumptions. The model is plausible, not a frame-by-frame reconstruction. Poor original documentation and the condition in which bodies were found prevent high confidence about the exact sequence.",
    sharedFacts: ["The tent was damaged and cut from inside.", "The group left in extreme cold without full clothing or footwear.", "Some victims died of hypothermia; others had major blunt-force injuries.", "No persuasive evidence of an armed attack was documented."],
    unresolved: ["The precise trigger that made the group leave immediately.", "The order in which injuries, shelter-building, and return attempts occurred.", "Whether each reported light or radiation observation was recorded and interpreted reliably."],
    timeline: [
      { date: "1 Feb 1959", event: "The group makes camp on the slope of Kholat Syakhl.", status: "Reported" },
      { date: "Night of 1–2 Feb", event: "The hikers leave the tent and descend toward the forest.", status: "Confirmed" },
      { date: "26 Feb 1959", event: "Searchers find the tent; bodies are discovered over the following months.", status: "Confirmed" },
      { date: "May 1959", event: "The Soviet investigation closes, citing an overwhelming natural force.", status: "Reported" },
      { date: "28 Jan 2021", event: "A peer-reviewed model demonstrates a delayed slab avalanche mechanism is plausible.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "Snow-slab mechanics", supports: "Natural event", strength: "Moderate", detail: "Modelling shows that cutting into the slope, wind-deposited snow, and a delay could release a compact slab on a locally steep section.", counter: "A model establishes possibility, not direct proof that this exact avalanche occurred.", sourceIds: ["dyatlov-study"] },
      { title: "Later field expeditions", supports: "Natural event", strength: "Moderate", detail: "Follow-up expeditions documented avalanche-prone terrain and slopes above the tent location steep enough for release.", counter: "Present-day observations cannot reconstruct the precise 1959 snowpack.", sourceIds: ["dyatlov-followup"] },
      { title: "Severe internal injuries", supports: "Both", strength: "Limited", detail: "Chest and skull injuries are central to claims of an unusual force but can be modelled as slab impact or later ravine trauma.", counter: "The injuries do not uniquely identify either mechanism, and the recovery context complicates interpretation.", sourceIds: ["dyatlov-study"] },
      { title: "Military or unknown-force claims", supports: "Alternative", strength: "Very limited", detail: "Reported lights, secrecy, and trace radioactivity have been linked to weapons tests or exotic phenomena.", counter: "No verified weapon debris, blast pattern, or coherent military event has been connected to the deaths.", sourceIds: ["dyatlov-study"] }
    ],
    sources: [
      { id: "dyatlov-study", title: "Mechanisms of slab avalanche release and impact in the Dyatlov Pass incident", publisher: "Communications Earth & Environment", type: "Peer-reviewed study", url: "https://www.nature.com/articles/s43247-020-00081-8" },
      { id: "dyatlov-followup", title: "Follow-up expeditions reveal avalanches at Dyatlov Pass", publisher: "Communications Earth & Environment", type: "Scientific follow-up", url: "https://www.nature.com/articles/s43247-022-00393-x" }
    ]
  },
  {
    slug: "atlantis", title: "Atlantis", question: "Was Plato describing a real civilization?", category: "Archaeology", status: "Speculative", reviewed: "July 2026", conventional: "Most classicists read Atlantis as a philosophical and political story within Plato’s Timaeus and Critias: an imperial power contrasted with an idealized ancient Athens, then destroyed for moral decline.", alternative: "Some researchers argue Plato preserved distorted memories of a real place or disaster, proposing Minoan Thera, Iberia, North Africa, or submerged Atlantic locations as inspirations.", evidence: "No confirmed archaeological site", tone: "red", readTime: "15 min",
    overview: "Atlantis enters the surviving written record in two late dialogues by Plato, composed in the fourth century BCE. In the story, Egyptian priests transmit an ancient history to Solon, who passes it through a family chain to Critias. No independent ancient Egyptian version has been identified, and proposed sites match selected details while conflicting with others.",
    confidence: "High that Plato shaped a literary myth; low on any historical kernel",
    verdict: "There is no archaeological evidence for Plato’s Atlantis as described. Real disasters and societies may have supplied motifs, but identifying one as Atlantis requires selective matching and chronological compression. The responsible assessment is that historical inspiration is possible while the claimed civilization remains unsupported.",
    sharedFacts: ["The detailed surviving account comes from Plato’s Timaeus and Critias.", "The story serves a political and philosophical contrast with idealized Athens.", "Critias ends abruptly before completing the narrative.", "No proposed location satisfies the text and independent archaeology together."],
    unresolved: ["Which myths, disasters, or political events influenced Plato’s composition.", "Whether Plato believed any portion of the transmission story was historical.", "Why Critias was left incomplete."],
    timeline: [
      { date: "c. 360 BCE", event: "Plato composes Timaeus and Critias, the surviving source texts for Atlantis.", status: "Reported" },
      { date: "Timaeus 20c–27b", event: "Critias introduces the Solon-and-Egypt transmission story.", status: "Confirmed" },
      { date: "Critias", event: "The dialogue expands the geography and institutions, then stops mid-narrative.", status: "Confirmed" },
      { date: "Modern era", event: "Many locations are proposed, but none gains archaeological confirmation as Plato’s Atlantis.", status: "Confirmed" }
    ],
    evidenceCards: [
      { title: "The source-text problem", supports: "Literary account", strength: "Strong", detail: "The narrative is preserved in Plato’s philosophical dialogues rather than in independent contemporary histories or Egyptian records.", counter: "Absence of another surviving text does not prove Plato invented every motif.", sourceIds: ["atl-timaeus", "atl-critias"] },
      { title: "Function inside the dialogues", supports: "Literary account", strength: "Strong", detail: "Atlantis functions as an aggressive, wealthy counterexample to virtuous ancient Athens and fits Plato’s political concerns.", counter: "Ancient authors could use historical material for philosophical purposes.", sourceIds: ["atl-iep", "atl-study"] },
      { title: "Thera and Minoan parallels", supports: "Historical inspiration", strength: "Limited", detail: "A powerful island culture and catastrophic Bronze Age eruption offer broad parallels to a destroyed maritime society.", counter: "The date, geography, scale, and political story do not match Plato without substantial reinterpretation.", sourceIds: ["atl-study"] },
      { title: "Proposed physical locations", supports: "Alternative", strength: "Very limited", detail: "Structures, geological formations, and flood histories across several regions are repeatedly matched to parts of the description.", counter: "No site has produced an inscription, material culture, or chronology that independently identifies it as Atlantis.", sourceIds: ["atl-critias"] }
    ],
    sources: [
      { id: "atl-timaeus", title: "Timaeus", publisher: "Perseus Digital Library", type: "Primary ancient text", url: "https://catalog.perseus.tufts.edu/catalog/urn:cts:greekLit:tlg0059.tlg031.perseus-eng1" },
      { id: "atl-critias", title: "Critias", publisher: "MIT Internet Classics Archive", type: "Primary ancient text", url: "https://classics.mit.edu/Plato/critias.html" },
      { id: "atl-iep", title: "Plato: The Timaeus", publisher: "Internet Encyclopedia of Philosophy", type: "Academic reference", url: "https://iep.utm.edu/timaeus/" },
      { id: "atl-study", title: "Plato’s Atlantis", publisher: "L’Antiquité Classique / Persée", type: "Academic analysis", url: "https://www.persee.fr/doc/antiq_0770-2817_1982_num_51_1_2060" }
    ]
  }
];
