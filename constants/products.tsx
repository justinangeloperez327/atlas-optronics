export const description = `Our main areas of activity include ISR sensors, solutions for the electromagnetic spectrum and mission avionics systems. We combine mission-critical technologies into package solutions that substantially improve detection capabilities through sensor and data fusion. In this way, HENSOLDT helps to avert threats to armed forces and society.`;

export const subtitle = `We offer our customers mission-critical sensor systems for protection, for surveillance and for situational awareness.`;

export const products = [
	{
		id: 1,
		title: "Avionics",
		slug: 'avionics',
		subtitle: "Ruler of the skies",
		image: "/home-products/avionics.jpg",
		subProducts: [
			{
				id: 1,
				title: "Airborne Computing",
				slug: 'airborne-computing',
				image: "/products/avionics/airborne-computing.jpg",
				subtitle: "Requirements for modern day aircraft are continually increasing a wide range of deployment scenarios and multi-role capabilities.",
				descriptions: [
					"With our certified and qualified airborne computers and flight control systems we offer small, compact, lightweight and flexibly controlled solutions to improve mission operations and meet the needs of various users and platforms.",
					"Our solutions represents a symbiosis of high-performance and safety with cyber–security attack resilient architecture.",
					"Over 30 years of experience in Mission Computing and more than 6500 delivered Airborne Computers operated on all major fixed-wing and helicopter civil and military platforms."
				],
				portfolioList: [
					"Single & Multi Core Processing computers",
					"Various accessories for small, medium and large sized computers",
					"Flexible control options (control unit, keyboard, touchscreen, line select keys joystick)",
					"RTCA/DO qualified systems",
					"Compact Certified Airborne Computer for civil and military applications",
					"Flight Control Computer",
					"Customizable Mission Computing"
				],
				equipments: [
					{
						title: "Cavion – Airborne Computing Family",
						list: [
							{
								title: "CaviFlight",
								subtitle: "Flight Control Computer",
								slug: 'caviflight',
								image: "/products/avionics/equipments/caviflight.jpg"
							},
							{
								title: "CaviMission",
								subtitle: "For civil and military applications",
								slug: 'cavimission',
								image: "/products/avionics/equipments/cavimission.jpg"
							},
							{
								title: "CaviPro",
								subtitle: "Customized Military Airborne Computer",
								slug: 'cavipro',
								image: "/products/avionics/equipments/cavipro.jpg"
							}
						]
					},
					{
						title: "Other Airborne Computing Systems",
						list: [
							{
								title: "Tactical Computer",
								subtitle: "For security and intelligence missions",
								image: "/products/avionics/equipments/tactical-computer.jpg"
							},
							{
								title: "Drone Computer",
								subtitle: "",
								image: "/products/avionics/equipments/drone-computer.jpg"
							},
							{
								title: "XtremView APC",
								subtitle: "Aircraft Panel PC",
								image: "/products/avionics/equipments/xtremvuew-pac.jpg"
							},
							{
								title: "RV1",
								subtitle: "Central Part of the Video Management System",
								image: "/products/avionics/equipments/rv1.jpg"
							},
							{
								title: "EB1",
								subtitle: "Multipurpose Airborne Computer",
								image: "/products/avionics/equipments/eb1.jpg"
							},
							{
								title: "RE1",
								subtitle: "The RE1 is the Heart of the Enhanced Reality System",
								image: "/products/avionics/equipments/re1.jpg"
							},
							{
								title: "RN7 / RN7CM",
								subtitle: "Digital Map Generator of the EuroNav 7",
								image: "/products/avionics/equipments/rn7-rn7cm.jpg"
							},
							{
								title: "Micro-VMS",
								subtitle: "Video Switching & Landing Assistant",
								image: "/products/avionics/equipments/micro-vms.jpg"
							}
						]
					}
				]
			},
			{
				id: 2,
				title: "Flight and Mission Data Recording & Management",
				slug: 'flight-and-mission-data-recording-and-management',
				image: "/products/avionics/flight-and-mission-data-recording-management.png",
				subtitle: "",
				descriptions: [
					"SferiRec, our Flight and Mission Data Recording and Management product family, comprises of flight and mission data recording, data transfer and analysis capabilities which are key capabilities for the complete mission life cycle.",
					"The recorded flight and voice data are securely stored on crash-protected memory, both fixed-installed and deployable.",
				],
				portfolioList: [
					"Lightweight Crash Recorder (LCR) models",
					"Fixed Crash Recorder (FCR) models",
					"Deployable Crash Recorder (DCR) models",
					"Solid State Data Carrier and Data Transfer Unit (SSDC + DTU) -   a transfer solution for mission and maintenance data",
				],
				
			},
			{
				id: 3,
				title: "Connectivity",
				slug: 'connectivity',
				subtitle: "",
				descriptions: [
					"Sending and receiving messages and calls, data exchange as well as flight following and mission records are important capabilities supported through a high level of cyber security during a mission or during maintenance processes.",
					"Receiving and sending data between aircraft and ground during a flight is essential for today’s missions.",
					"Our connectivity systems provide the capability to communicate in a fast and secure manner and can easily be integrated with different systems on the aircraft."
				],
				portfolioList: [
					"Cyber Security Solutions",
					"Flying Firewall and Connectivity systems",
					"Data exchange capabilities between ground and air",
					"Individual and mission-optimized system configurations",
				],
				image: "/products/avionics/connectivity.jpg",
			},
			{
				id: 4,
				title: "Mission Management / Pilot Assistance",
				slug: 'mission-management-pilot-assistance',
				subtitle: "",
				descriptions: [
					"Successful Mission Management and Pilot Assistance is only possible with the highly developed equipment. Our products will fulfil all requirements of pilots and operators during flight.",
					"With the support of the latest maps (2D and 3D) and databases the value of the system will increase enormously when combined with overlays of, e.g. live camera feeds, or weather.",
					"Modern technology and sensorics enable the operator with a 360° view, terrain and obstacle warnings and an ease visualization and control of broad range of third party avionics systems.",
					"With a variety of options to expand and evolve the capabilities of a mission, our systems offer a tremendous range of individual, mission-customized system configurations and mission tools to support the operation."
				],
				portfolioList: [
					"Situational Awareness and Mission Management Systems",
					"State of the Art maps",
					"Fully certified computers",
					"Vector Overlay Generator",
				],
				image: "/products/avionics/mission-management-pilot-assistance.jpg",
			},
			{
				id: 5,
				title:"Video Management",
				slug: 'video-management',
				subtitle: "Finding a solution which fits todays image and video formats is a growing challenge.",
				descriptions: [
					"Providing the capability to process a multitude of internal and external video/audio sources to support the operator during flight are rudimental requirements.",
					"Video Switching Matrix, Video Processing engines and Multiplexers tailor and combine the video inputs and routes the imagery to the right video target, such as displays, downlink, internal or external video recorder.",
				],
				portfolioList: [
					"Powerful mission systems for camera operations",
					"Video Distribution Units",
					"Video Configurations options",
					"Video and Audio Recorder",
					"State-of-the-art features for any airborne sensing platform",
				],
				image: "/products/avionics/video-management.jpg",
			},
			{
				id: 6,
				title: "Mission Planning Support",
				slug: 'mission-planning-support',
				subtitle: "The pilot is tasked with designing and planning a mission – reliably and within a few minutes. He needs to plan the optimal and safest route for fulfilling his mission.",
				descriptions: [
					"Our Solution is an all–in-one-network-based and modular solution for all needs related to mission preparation, execution and analysis.",
					"Flight Operations, Aircraft Performance, Weight and Balance solutions for Windows PC, Laptop and iPad are designed for all operators. Solutions for computers, laptops and tablets.",
					"The products offer the capability to create a mission network between multiple assets to enhance situational awareness. Being independent utilizing a solution which allows using confidential, or the preparation of various maps and databases.",
					"Trainings can be supported by using simulators and emulators to improve the handling of the systems during a mission."
				],
				portfolioList: [
					"Weight & Balance solutions for Windows PC, Laptop and iPad",
					"Mission Planning Tools",
					"Using/preparation of confidential maps and databases",
					"Mission network through multiple communication methods",
					"Simulation software for training purposes",
					"Ground-based and modular mission management system",
					"Fleet Management System",
					"Sensor control software solution"
				],
				image: "/products/avionics/mission-planning-support.jpg",
			},
			{
				id: 7,
				title: "Data Analysis and Evaluation",
				slug: 'data-analysis-and-evaluation',
				subtitle: "Our solutions optimize aircraft availability.",
				descriptions: [
					"Our range of products  supports your aircraft to reduce the life cycle costs by providing optimum work orders and avoiding unnecessary measures. This will maximize the number of aircraft ready for operation.",
					"Read-out data with user-defined recording parameters for the analysis of maintenance data or aircraft accidents.",
				],
				portfolioList: [
					"Planning for optimum aircraft availability",
					"State Data Carrier Adapter - Interface device for read- out SSDC",
					"Enhanced Handheld Computer - recorder models for large aircraft",
					"Read-out Station for crash recorder products",
				],
				image: "/products/avionics/data-analysis-and-evaluation.jpg",
			}
		]
	},
	{
		id: 2,
		title: "Optronics",
		slug: 'optronics',
		subtitle: "For a clear view, day and night",
		descriptions: [
			"We design, develop and manufacture optical, optronic and precision-engineered products for defence and non-defence applications.",
			"These optronic products are used globally by armed forces and security personnel for monitoring, identification and classification purposes, as well as for highly precise measurement, evaluation, targeting and self-protection.",
			"They are deployed on various platforms, including submarines, armoured vehicles, manned and unmanned aircraft and satellites, for land, air, sea and space missions."
		],
		image: "/home-products/optronics.jpg",
		subProducts: [
			{
				id: 1,
				title: "Airborne Optronics",
				slug: 'airborne-optronics',
				subtitle: "",
				descriptions: [
					"We develop and manufacture <strong>airborne</strong> electro-optical sensors and systems for integration into aircraft, unmanned air vehicles and helicopters. These sophisticated solutions enable effective surveillance, identification, intelligence gathering and targeting from the vantage point of an airborne platform.",
					"Our sensors permit aircrews to detect, recognize and identify vehicles and individuals kilometers away, from a safe and discreet distance in law enforcement and military missions. The HD images enable detailed aerial photo analysis so that infrastructures, troop movements and targets are clearly recognizable, even under detrimental light and weather conditions.",
					"In addition, we offer self-protection systems which detect missiles, laser range finders, laser target designators, laser beam rider missiles and radar guided threats. According to customer wishes, counter-measure capabilities such as flares and jamming technology can be integrated.",
					"Our airborne systems follow a modular set-up, facilitating maintenance and repairs which in turn reduces lifecycle costs. Our high-performance systems are combat proven, reliable and engineered for long endurance."
				],
				portfolioList: [
					"Multi-spectral observation, surveillance and targeting systems for manned and unmanned aircraft, rotary as well as fixed-wing",
					"High-performance optical frontends and EO-cameras for tactical and strategic reconnaissance pods for fighter aircraft",
					"Radar, laser and missile warning systems, including fully autonomous systems with integrated counter-measure capabilities",
				],
				image: "/products/optronics/airborne-optronics.jpg",
			},
			{
				id: 2,
				title: "Vehicle Optronics",
				slug: 'vehicle-optronics',
				subtitle: "",
				descriptions: [
					"Drawing on a well of experience in optics and optronics, we developed a wide spectrum of observation and targeting platforms that enable vehicle-mounted crews to gain and maintain situational awareness even in inclement weather and under the most adverse light conditions. With the benefit of stabilized panorama viewing and targeting, they never lose track of their surroundings.",
					"For vehicle-mounted forces, that means being able to detect, observe and identify threats as well as track and acquire targets with absolute certainty under all light and weather conditions.",
					"These sensor solutions can be easily integrated into every new wheeled, tracked and armoured vehicle or into legacy systems at any time, as they interface with both, new and existing fire control systems. The long-range sensors have been stabilized to defy difficult terrain. Driver’s vision enhancers allow drivers to manoeuver at top speeds under all light conditions.",
					"Moreover, we offer a self-protection system for armoured vehicles. It combines warning sensors, which detect missile and laser threats, with appropriate countermeasures.",
				],
				portfolioList: [
					"Eye-safe laser range finders with low to high pulse repetition",
					"Commander periscope with gyroscope-stabilized target lines and integrated laser rangefinder for armoured vehicles",
					"Gunnery targeting instruments with gyroscope-stabilized target lines and integrated laser rangefinder for armoured vehicles",
					"Driver’s night vision devices",
					"Self-protection system with integrated countermeasures for armoured vehicles",
					"Sensors and systems for fire control systems",
					"Thermal imaging devices for armoured vehicles",
					"Boresighting for fast long- and short-range alignments of targeting equipment"
				],
				image: "/products/optronics/vehicle-optronics.jpg",
			},
			{
				id: 3,
				title: "Sight, Scopes and Night-Vision Attachments",
				slug: 'sight-scopes-and-night-vision-attachments',
				subtitle: "",
				descriptions: [
					"Since 1896 the name Hensoldt stands for combat-proven, reliable and accurate targeting and observation optics for hand-held weapons up to heavy weapons systems. Our line of products includes sights, scopes, spotters, night vision attachments, residual light intensifiers and fire control sights.",
					"With all devices coming from the same reliable source, full modularity is guaranteed and customization is possible. We offer the full range of targeting and observation optics and we are proud to support conventional troops and special forces around the globe.",
					"The optics are robust enough for use in every climatic environment and offer unprecedented clear vision in all light conditions. Our sights and night vision attachments are selected for the German “Soldier of the Future” programme (IdZ-1 and IdZ-2)."
				],
				portfolioList: [
					"Targeting optics for short and intermediate ranged weapons like assault rifles, optional with reticle illumination and red dot",
					"Observation optics with a high magnification of up to 60x, bright, a high-contrast image at all magnification levels, reticles that change size congruent with magnification level",
					"Residual light intensifiers and thermal imagers as modular night-vision attachments for assault rifles, lightweight machine guns and sniper rifles",
					"Handheld observation optics combining a visual channel and a thermal imager",
				],
				image: "/products/optronics/sight-scopes-and-night-visions-attachments.jpg",
			},
			{
				id: 4,
				title: "Surveillance Optronics",
				slug: 'surveillance optronics',
				subtitle: "",
				descriptions: [
					"Since the early 1990s, we have been committed to providing security solutions for critical infrastructures and national borders. Both, our mobile and stationary EO/IR surveillance systems alike, are designed to operate under all climate conditions. We have a proven track record with hundreds of systems deployed around the globe.",
					"On the basis of technological advancements and feedback from our customers, we constantly improve our sensors as well as the related service concept. That enables us to continuously meet, if not even exceed, today’s performance and reliability requirements.",
					"Our latest models are all IP-based. That allows us to achieve a substantial reduction of integration efforts into third-party and/or existing legacy systems.",
					"Our recent move towards a modular architecture further enables end customers and/or local industry to perform in-country maintenance and service tasks. Most of these can even be conducted on-site. This drastically reduces system downtime and builds up technical expertise in-country."
				],
				portfolioList: [
					"Short-, medium- and long-range all weather optronic sensors/multi-sensor platforms for mobile and stationary surveillance.",
					"Border surveillance: stationary and mobile systems, stand-alone or integrated solutions",
					"Critical infrastructure such as airports, harbours, military camps",
					"Safety applications for bird strike prevention, short-range monitoring on merchant and passenger vessels",
					"In-service support to increase uptime of the systems and their lifecycle",
					"Extensive surveillance software suite ASSESS, including tracker, moving target indication and GIS"
				],
				image: "/products/optronics/surveillance-optronics.jpg",
			},
			{
				id: 5,
				title:"Maritime Optronics",
				slug: 'maritime-optronics',
				subtitle: "",
				descriptions: [
					"With more than 100 years of experience in optical sensors for maritime applications, we are the global market leader of submarine periscopes and optronic mast system.",
					"Listening attentively to navies around the world has led us to a profound understanding of their operational demands and requirements. Our cutting-edge technologies do not only respond to these requirements but go above and beyond by introducing new capabilities, making room for tactical innovation.",
					"We facilitate maintenance and repairs, optimizing logistics and subsequently lowering lifecycle costs of the systems.",
					"Our submarine optronic solutions are providing high resolution all-light, all-weather visual capabilities. The systems can be completely integrated into the combat management system (CMS) or operate as a stand-alone solution in new-built or retrofit submarines.",
					"In addition, we offer laser detection and identification systems for warning from laser-based weapon systems."
				],
				portfolioList: [
					"Direct view, hull-penetrating periscopes of the SERO family integrating a broad variety of optronic technologies",
					"Non-hull penetrating optronics masts of the OMS family which are remote controlled from the CMS or a stand-alone console allowing to gain high quality image data at a very short exposure time.",
					"SERO and OMS systems can be individually combined and customized to the navy’s requirements.",
					"Workshop facilities allow full support of our submarine optronic systems in the customers country, enable maintenance and repair up to maintenance level 4",
					"Electro Optical Tracking Systems (EOTS) for surface vessels",
					"Laser Detection System for Naval Vessels"
				],
				image: "/products/optronics/maritime-optronics.jpg",
			},
			{
				id: 6,
				title: "High-Performance and Space Optics",
				slug: 'high-performance-and-space-optics',
				subtitle: "",
				descriptions: [
					"Our credentials in space applications date back to Carl Zeiss and its legacy of more than 50 years of experience in this field of high-performance technology. Our team of seasoned engineers continues to engage in cutting-edge space and terrestrial optics, co-operating closely with Carl Zeiss research and technology labs.",
					"Our strong design and engineering ethos, paired with agile, responsive project management, enables us to deliver world-class optical systems. Designed to operate reliably under the most adverse environmental conditions, they are tough enough to withstand the rigors of protracted space missions.",
					"Customers value our ability to unite design and systems engineering with manufacturing, integration, alignment and verification processes. Our on-site assets include class-100 clean rooms, thermal vacuum chambers with optical access, shock and vibration testing facilities as well as environmental test chambers.",
				],
				portfolioList: [
					"Precision mirrors for earth observation",
					"Cryomechanisms for satellites",
					"Optics for infrared space applications",
					"High-performance optics for industrial commercial solutions, such as measurement technology for chip manufacturing with extreme ultra violet light",
					"Applications for free-space laser communication between earth stations, airborne mobile stations and satellites with up to 5 Gb/s data transfer",
				],
				image: "/products/optronics/high-performance-and-space-optics.jpg",
			},
			{
				id: 7,
				title: "High-Performance and Space Optics",
				slug: 'high-performance-and-space-optics',
				subtitle: "",
				descriptions: [
					"Our credentials in space applications date back to Carl Zeiss and its legacy of more than 50 years of experience in this field of high-performance technology. Our team of seasoned engineers continues to engage in cutting-edge space and terrestrial optics, co-operating closely with Carl Zeiss research and technology labs.",
					"Our strong design and engineering ethos, paired with agile, responsive project management, enables us to deliver world-class optical systems. Designed to operate reliably under the most adverse environmental conditions, they are tough enough to withstand the rigors of protracted space missions.",
					"Customers value our ability to unite design and systems engineering with manufacturing, integration, alignment and verification processes. Our on-site assets include class-100 clean rooms, thermal vacuum chambers with optical access, shock and vibration testing facilities as well as environmental test chambers."
				],
				portfolioList: [
					"Planning for optimum aircraft availability",
					"State Data Carrier Adapter - Interface device for read- out SSDC",
					"Enhanced Handheld Computer - recorder models for large aircraft",
					"Read-out Station for crash recorder products",
				],
				image: "/products/optronics/high-performance-and-space-optics.jpg",
			}
		]
	},
	{
		id: 3,
		title: "Radar, IFF & COMMS",
		slug: 'radar',
		subtitle: "Core competence meets innovative strength",
		image: "/home-products/radar-coms.jpg",
		subProducts: [
			{
				id: 1,
				title: "Air Surveillance Radars",
				slug: 'air-surveillance-radars',
				subtitle: "HENSOLDT supplies customers all over the world with air traffic control and IFF solutions for defence and non-defence applications.",
				descriptions: [
					"The rapidly increasing volume of air traffic poses increasing challenges for military and civil air traffic control. HENSOLDT is responding to these challenges with the further development of its military and civil ATC systems. HENSOLDT’s ATC solutions include innovative new developments as the Twinvis passive radar or the ASR-NG airport surveillance radar: The latest generation of this air traffic control radar combines primary and secondary radar to provide comprehensive 3D information about the aircraft detected.",

				],
				portfolioList: [
					"Defence and non-defence air traffic control radar",
					"IFF secondary radar",
					"Passive radar"
				],
				image: "/products/radar-coms/air-surveillance-radars.jpg",
			},
			{
				id: 2,
				title: "Identification Friend or Foe (IFF) & Data Links",
				slug: 'identification-friend-or-foe-and-data-links',
				subtitle: "",
				descriptions: [
					"The advanced Mode 5 IFF is the fundamental principle of positively identifying threats in real time, within war theatre or critical mission. Enhancing security through new cryptographic algorithms, Mode 5 IFF reduces friendly fire casualties and maximizes the combat effectiveness in the air, on land and at sea.",
					"With five decades experience of designing, manufacturing, integrating and maintaining IFF equipment including military cryptographic computers, HENSOLDT is currently one of the major IFF Mode 5 technology and capability providers worldwide. Conceived with modular and sustainable design our IFF portfolio is certified with AIMS and NATO STANAG 4193 Ed.3, ensuring full interoperability across the US and NATO allies.",
					"Today our IFF portfolio equip a whole range of different platform types in the world, covering all operational needs from airborne UAV, helicopters, fighters aircrafts, to ground-based fixed and air defence radar (including civil and military airport surveillance radar), up to complex naval vessels.",
					"HENSOLDT datalink technology has been successfully used on multiple airborne platforms like Harfang, KZO, Mirage 2000, Airbus platforms, counting more than 50,000 flying hours. Our newest family of wide-band and narrow-band line-of-sight datalink solutions called Lygarion uses the most recent technology in order to enable the secure and real-time acquisition and exchange of operational data between multiple military platforms."
				],
				portfolioList: [
					"Defence and non-defence lightweight transponders",
					"Short, medium and long range IFF interrogators",
					"IFF Transponders",
					"IFF non rotating Antenna",
					"Naval Cabinet",
					"Cryptographic computers",
					"Test equipment",
					"Line-of-Sight (LoS) and Non-Line-of-Sight (NLoS) data link modems",
				],
				image: "/products/radar-coms/identification-friend-or-foe.jpg",
			},
			{
				id: 3,
				title: "Airborne Radars",
				slug: 'airborne-radars',
				subtitle: "HENSOLDT is a leading sensors solutions supplier capitalizing on decades of experience in airborne and space radars.",
				descriptions: [
					"HENSOLDT owns state-of-the art technology in AESA radars and demonstrated high-performance airborne SAR.",
					"One of HENSOLDT's more recent developments is the PrecISR. It gives defence and security forces more and better information to counter threats to their citizens’ safety and well-being.",
					"The Detect and Avoid Radar for remotely piloted aircraft systems (RPAS) facilitates a safe integration of unmanned systems into the non-segregated airspace.",
					"As part of the European consortium Euroradar, HENSOLDT and its partner companies have developed the CAPTOR-E Radar. The Eurofighter will be equipped with this new generation of Active Electronic Scanned Array (AESA) radar system which will enhance the aircraft’s capabilities and survivability."
				],
				portfolioList: [
					"Multimode, fire control nose radars for Eurofighter Typhoon",
					"Airborne multi-mission surveillance radar for fixed-wing, helicopter, UAV",
					"Anti-collision system for drones",
				],
				image: "/products/radar-coms/airborne-radars.jpg",
			},
			{
				id: 4,
				title: "Ground Based Radars",
				slug: 'ground-based-radars',
				subtitle: "",
				descriptions: [
					"The HENSOLDT radar family offers ground based air surveillance systems for short and medium-range air defence for the protection of ground forces.",
					"The Spexer 2000 3D radar product family support military operations and protect simultaneous sea, land, and air-surveillance in fixed, deployable and mobile configurations. It represents high-performance surveillance including automatic detection, tracking and classification of ground-, sea and air targets. Spexer 2000 3D MkIII broadens the capabilities for air defense (Ground Based Air Defense (GBAD) / Very Short Range Air Defense (VSHORAD)).",
					"The current product portfolio includes multifunction air surveillance and target acquisition radar systems using latest technology for rapid response and high precision.",
					"COBRA (Counter Battery Radar) is a multifunction battlefield radar for the rapid location of hostile artillery positions as well as for the adjustment and registration of own artillery firings. The system has been developed in a tri-national programme (GE, FR, UK) by the Euro-Art Consortium.",
					"The mobile systems TRML-3D and TRML-4D are used in surveillance missions and air defence missions supporting VSHORAD/SHORAD weapon systems. TRML-3D/ 32 has been in service since 2004 with different armed forces covering a number of military missions. The newly developed TRML-4D radar system uses the latest AESA radar technology allowing for fastest response time and high hit probability even in a complex environment with a high target density and involving highly agile and asymmetric threats.",
					"An innovation and new milestone in radar development is the TwInvis passive radar. The system does not emit any signals itself, which means that it remains virtually invisible. Nevertheless it can even locate aircraft equipped with stealth technology."
				],
				portfolioList: [
					"Air defence and weapon location radar",
					"Passive radar for Ground Based Air Defence",
					"Battlefield surveillance radar",
				],
				image: "/products/radar-coms/ground-based-radars.jpg",
			},
			{
				id: 5,
				title: "Security Radars",
				slug: 'security-radars',
				subtitle: "",
				descriptions: [
					"The SPEXER security radar family has been developed based on HENSOLDT’s long term experience with Active Electronically Scanned Array (AESA) technology and pulsed radar technology.",
					"The SPEXER radar family offers high performance surveillance radars for different ranges for the automatic detection and classification of ground, sea and low-flying air targets.",
					"It was developed for the specific requirements of security scenarios with its primary fields of application in border security systems, as well as the protection of high-value assets, critical infrastructure and perimeter."
				],
				portfolioList: [
					"Perimeter, security, surface radars"
				],
				image: "/products/radar-coms/security-radars.jpg",
			},
			{
				id: 6,
				title: "Naval and Coastal Radars",
				slug: 'naval-and-coastal-radars',
				subtitle: "",
				descriptions: [
					"For almost three decades, HENSOLDT and its predecessor companies have served the Navies of the World with its TRS family of naval radars.",
					"Starting with TRS-3D in the beginning of the 1990s, the multiple combat proven TRS naval radar system has continuously been improved over the years as technology evolved. The well-established TRS-3D also forms the basis for the ground-based TRML-3D. The latest naval radar portfolio extension was successfully realised with the modern TRS-4D AESA-radars, which are operational by many customers around the world. TRS-4D is available (in a Mark 1 configuration) as both rotating and non-rotating version. It is designed to meet current and future mission requirements.",
					"HENSOLDT UK has been providing the world’s navies with navigation radars for over 70 years. With the patented Kelvin Hughes SharpEye Technology, HENSOLDT UK pioneered the use of coherent pulse Doppler solid state technology in a low weight sensor configuration in 2006, allowing the standard navigation radar to be used for multiple tasks at the same time.",
					"All HENSOLDT UK's solid state radars contain SharpEye technology to deliver superior radar performance and reliability. SharpEye , the world’s first affordable navigation and surface search pulse Doppler radar sensor, offers high reliability, low cost of ownership and improved detection ranges, especially of small targets in clutter.",
				],
				portfolioList: [
					"2D solid state pulse doppler navigation and surface search radar",
					"3D series multi-mode surveillance and target acquisition radars",
					"4D series fixed panel and rotator multi-function/ multi-mode surveillance and target acquisition radars",
					"Navigation Radars (X- and S-Band)",
					"Submarine Radar",
					"Integrated Naval Bridge System (INBS)",
					"Coastal Surveillance Radars",
					"Vessel Traffic Services",
					"Bridge System",
				],
				image: "/products/radar-coms/naval-and-coastal-radars.jpg",
			},
			{
				id: 7,
				title: "Commercial Shipping Solutions",
				slug: 'commercial-shipping-solutions',
				subtitle: "",
				descriptions: [
					"HENSOLDT UK has been supplier of navigation products and systems for over 70 years for commercial shipping as well as navies and coastguards.",
					"The Kelvin Hughes SharpEye technology is installed in numerous types of vessel from small workboats up to cruise liners, container ships and tankers.",
					"HENSOLDT UK bridge equipment and systems provide the navigators with the capability to navigate safety, allowing the operator to clearly see targets in all weather conditions.",
					"All HENSOLDT UK technologies meet the latest IMO standards and international shipping requirements.",
				],
				portfolioList: [
					"Navigation Radar System",
					"Voyage Data Recorders",
					"Electronic Chart Display and Information System (ECDIS)",
				],
				image: "/products/radar-coms/commercial-shipping-solutions.jpg",
			},
			,
			{
				id: 8,
				title: "Space Radars",
				slug: 'space-radars',
				subtitle: "",
				descriptions: [
					"Space technology from HENSOLDT is regularly being used when looking down from space onto our home planet, producing extremely high-resolution radar images (one metre resolution). Thanks to radar, the images can be produced both by day and by night and even through clouds.",
					"HENSOLDT supplies the essential assemblies of the radar electronics, as well as the transmit and receive modules for the antenna. Key components for the space radars from HENSOLDT have now been used flawlessly in space for more than two decades.",
					"HENSOLDT components and subcomponents are in use on various programs for space missions, e.g. DLR’s two radar satellites TerraSAR-X and TanDEM-X, Spanish radar satellite PAZ, German Bundeswehr’s latest reconnaissance satellite SARah as well as the European meteorological satellite EUMETSAT (to be launched in 2021).",
				],
				portfolioList: [
					"Space SAR radar electronics for advanced earth observation satellites"
				],
				equipmentList: [
					
				],
				image: "/products/radar-coms/space-radars.jpg",
			}
		]
	},
	{
		id: 4,
		title: "Spectrum Dominance",
		slug: 'spectrum-dominance',
		subtitle: "Dominating the information space",
		image: "/home-products/spectrum-dominance.jpg",
		subProducts: [
			{
				id: 1,
				title: "Electronic Support / SIGINT",
				slug: 'electronic-support-sigint',
				subtitle: "Sensing of the electromagnetic spectrum",
				image: "/products/spectrum-dominance/electronic-support-sigint.jpg",
				descriptions: [
					"Gaining strategic advantages thanks to ever more powerful sensors, the collection of data does not represent the greatest challenge today, but rather its meaningful processing and evaluation.",
					"They detect communication and radar signals, identify the originators and create a comprehensive overview of the situation in real time.",
				],
				portfolioList: [
					"Simultaneous COMINT and ELINT (SIGINT) integrated solution",
					"Improved tactical knowledge of Modular 'SWaPC' optimized ELINT and COMINT solutions",
					"Battlefield superiority",
				],
				equipments: [
					{
						title: "Airborne Electronic Support & SIGNINT",
						list: [

						]
					},
					{
						title: "Land-based Electronic Support & SIGNINT",
						list: [
							
						]
					},
					{
						title: "Maritime Electronic Support & SIGNINT",
						list: [
							
						]
					}
				]
			},
			{
				id: 2,
				title: "Receivers",
				slug: 'receivers',
				subtitle: "",
				image: "/products/spectrum-dominance/identification-friend-or-foe.jpg",
				descriptions: [
					"Highly agile, modern radar systems use large frequency ranges and overlap with communication signals from defence and non-defence systems in the electromagnetic spectrum and in urban terrain. This significantly complicates the correct detection and localization of emitters.",
					"In addition, there is not always sufficient prior knowledge about potential threats in the electromagnetic spectrum. These changed framework conditions require new answers. Answers only a broadband digital radar warner can provide.",
					"Protecting the crews is a decisive factor when using ground vehicles and aircraft. For many years now, HENSOLDT has offered very modern and scalable solutions for this purpose, 1.e. for protection from guided missiles and laser-based weapons systems. These have already proven themselves in many missions of numerous forces.",
				],
				portfolioList: [
					"Multi-channel wideband HF monitoring receiver",
					"Digital wideband receiver",
					"Wideband multirole monitoring receiver",
				],
				equipments: [
					{
						title: "Receivers",
						list: [

						]
					},
				]
			},
			{
				id: 3,
				title: "Direction Finders",
				slug: 'direction-finders',
				subtitle: "",
				image: "/products/spectrum-dominance/direction-finders.png",
				descriptions: [
					"Direction Finders are used in land, sea and air applications to detect and locate transmission in the entire frequency range from 500 kHz to 9 GHz.",
					"From small portable multirole models, to static deployed multi-client systems, our state-of-the-art DF’s address all customer requirements.",
				],
				portfolioList: [
					"Detect and locate transmission in the entire frequency range from 500 kHz to 9 GHz",
					"Small portable multirole models",
					"Static deployed multi-client systems",
				],
				equipments: [
					{
						title: "Direction Finders",
						list: [

						]
					},
				]
			},
			{
				id: 4,
				title: "Electronic Attack / Jammers",
				slug: 'electornic-attack-jammers',
				subtitle: "Disrupt - Deny - Degrade - Deceive",
				image: "/products/spectrum-dominance/electronic-attack-jammers.jpg",
				descriptions: [
					"Spectrum superiority and more advanced intelligence are the key elements needed to build an accurate situational awareness picture. The challenges of working in dense signal scenario (defence and non-defence) and new, yet known military hostile signals are a given. Protecting the forces is a decisive factor for Air, Sea and Land Forces.",
					"For many years now, HENSOLDT has offered very modern and scalable solutions for this purpose, i.e. for protection from guided missiles and laser-based weapons systems."
				],	
				portfolioList: [
					"Disrupt communication and radar signals on all available frequency bands",
					"Jam enemy sensors and their communications",
					"Jam and even interfere with signals which are used to remotely trigger explosive devices",
					"Gaining Strategic advantage",
				],
				equipments: [
					{
						title: "Airborne Jammers",
						list: [

						]
					},
					{
						title: "Land-based Jammers",
						list: [

						]
					},
				]
			},
			{
				id: 5,
				title: "Self-Protection",
				slug: 'self-protection',
				subtitle: "Protecting platforms & soldiers from enemy attacks by use of the electromagentic spectrum",
				image: "/products/spectrum-dominance/self-protection.jpg",
				descriptions: [
					"For protecting platforms and its personell from existing and future threats, self protection has become a crucial factor in all domains.",
					"This is applicable for especially high sophisticated and manned platforms.",
					"Our modular and scalable self protection systems will support you in accomplishing any mission in a dense electromagnetic environment applicable for several platforms.",
				],
				portfolioList: [
					"Advanced self protection systems for air, naval and ground based applications",
					"Passive and active Self protection",
					"Protection against Radio Controlled Improvised Explosive Devices (RCIED)",
					"Customer tailored solutions",
				],
				equipments: [
					"Airborne Self Protection",
					"Land-based Self Protection",
					"Maritime Self Protection"
				]
			},
			{
				id: 6,
				title: "Electronic Warfare Software Suites & Ground Support Stations",
				slug: 'electronic-walfare',
				subtitle: "",
				image: "/products/spectrum-dominance/electronic-walfare.jpg",
				descriptions: [
					"<strong>EW Software Suites</strong>",
					"Nowadays software is becoming a crucial factor for Spectrum Dominance and Net Centric Warfare. Hensoldt is providing EW Software Suites for Air, Land and Naval applications combined in one solution covering COMINT, ELINT and ECM. Our Software ensures a fast and reliable signal scenario evaluation, automatic EOB generation, identification of unknown emitters as well as offline data analysis for strategic and tactical scenarios.",
					"<strong>EW Ground Support Stations</strong>",
					"The generation and verification of mission data is performed by specific EW Ground Support Stations. Those stations are used for generation, optimization and verification of pre-flight messages to secure and optimize EW Prime Equipment performance, realistic scenario tests for optimized threat awareness and countermeasures activities."
				],
				portfolioList: [
					"EW Software Suites for air, land and naval applications combined in ONE solution covering COMINT, ELINT and ECM.",
					"EW Ground Support Stations in used for optimization and verfication of Electronic Warfare Equipment performance, threat awareness and ECM activities."
				],
				equipments: [
					{
						title: "EW Software Suites & Ground Support Stations",
						list: [

						]
					}
				]
			},
			{
				id: 7,
				title: "Electronic Warfare Systems",
				slug: 'electronic-walfare-systems',
				subtitle: "",
				image: "/products/spectrum-dominance/electronic-walfare-systems.jpg",
				descriptions: [
					"<strong>TEWS</strong>",
					"The primary purpose of the Tactical Electronic Warfare system is to support the battlefield commander in tactical decision making through the collection of enemy communications information. The secondary purpose of the system is to supply intercepted information to the strategic domain for processing, validation, analysis and decision making. Collected transmission data consisting of intercepts with Audio and IF recordings and Direction Finding LOBs can be processed either at the local ESM station or at the central Operations Control Centre. This System is just for electronic warfare landbased applications.",
					"<strong>MaSAMS</strong>",
					"The Maritime Spectrum Awareness Management Suite combines the Key Features of active naval radar systems, passive radar systems, COMINT and ESM/ELINT systems, Electro Optical systems, Data Link systems and laser warning systems and ensures efficient correlation between all available sensors. Those Suites just for electronic warfare naval applications."
				],
				portfolioList: [
					"Tactical and Strategical Electronic Warfare Systems",
					"Land-based applications for Electronic Support / SIGINT , Electronic Attack and Self Protection",
					"Maritime Spectrum Awareness Management Suite",
					"Naval application for  Electronic Support / SIGINT, Electronic Attack and Self Protection, passive & active radar and EO systems",
					"Integration of 3rd party equipment is possible"
				],
				equipments: [
					{
						title: "Electronic Warfare Systems",
						list: [

						]
					}
				]
			}
		]
	},
];

