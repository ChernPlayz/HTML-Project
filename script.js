/* copied script */
function toggleDropdown(id) {
	// Close all other dropdowns
	const dropdowns = document.getElementsByClassName("dropdown-content");
	for (let i = 0; i < dropdowns.length; i++) {
		if (dropdowns[i].id !== id) {
			dropdowns[i].classList.remove("show");
		}
	}
	// Toggle current
	document.getElementById(id).classList.toggle("show");
}

// Close dropdowns when clicking outside
window.onclick = function (e) {
	if (!e.target.matches('.dropBtn')) {
		const dropdowns = document.getElementsByClassName("dropdown-content");
		for (let i = 0; i < dropdowns.length; i++) {
			dropdowns[i].classList.remove("show");
		}
	}
}
/* until here */

// MAIN BTNS
const description = document.querySelector(".description")
const topics = {
	"History":
		`
			<h1>Prehistoric:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Japanese_Paleolithic" target="_blank">Paleolithic 旧石器時代</a> (35,000-14,000 BC)</li>
				<p>
				- Uses stone-tools, hunter-gatherers
				</p>
				
				<li><a href="https://en.wikipedia.org/wiki/J%C5%8Dmon_period" target="_blank">Jōmon 縄文時代</a> (14,000-300 BC)</li>
				<p>
				- Jōmon 縄文 = cord pattern, found in pottery decoration<br>
				- Dogū 土偶, clay mask, pit-houses<br>
				- Early cultivation: azuki 小豆
				</p>
				
				<li><a href="https://en.wikipedia.org/wiki/Yayoi_period" target="_blank">Yayoi 弥生時代</a> (300 BC-300 AD)</li>
				<p>
				- Introduction of rice farming from China/Korea<br>
				- Iron and bronze tools began using<br>
				- Social classes started forming<br>
				- Simpler pottery than Jomon<br>
				- Earliest name of JP from Chinese is Wa 倭
				</p>
			</ul>
			
			<h1>Ancient:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Kofun_period" target="_blank">Kofun 古墳時代</a> (300-538 AD)</li>
				<p>
				- 古墳 = ancient burial mound, built for members of the ruling class, different shape like keyhole-shaped mounds (zenpō-kōen-fun 前方後円墳)<br>
				- Yamato Clan began to unify Japan, start of imperial line<br>
				- Increased contact with China and Korea<br>
				- Early Shinto practices
				</p>
			</ul>

			<h1>Classical:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Asuka_period" target="_blank">Asuka 飛鳥時代</a> (538-710)</li>
				<p>
				- Introduction of Buddhism from Korea<br>
				- Wa 倭 -> Nippon 日本<br>
				- Wa 倭 -> 和('peace/harmony') (和食、和牛、和服)
				- Prince Shotoku, who promoted Buddhism and governance reform (adopted Chinese calanders, built numerous Buddhist temples, sent students to China)
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Nara_period" target="_blank">Nara 奈良時代</a> (710-794)</li>
				<p>
				- First permanent capital: Heijō-kyō 平城京 (Nara) (modeled after 长安)<br>
				- Strong central government rule based on Chinese model<br>
				- Buddhism became state religion<br>
				- Compilation of Kojiki and Nihon Shoki (myth-histories)<br>
				- Built Todai-ji and Great Buddha
				- Man'yōgana 万葉仮名
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Heian_period" target="_blank">Heian 平安時代</a> (794-1185)</li>
				<p>
				- Emperor Kammu moved the capital to Heian-kyō 平安京 (Kyoto)<br>
				- Fujiwara clan dominates politics<br>
				- Rise of samurai and local lords weakened central power
				</p>
			</ul>

			<h1>Feudal:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Kamakura_period" target="_blank">Kamakura 鎌倉時代</a> (1185-1333)</li>
				<p>
				- First military government (Kamakura shogunate) by Minamoto no Yoritomo<br>
				- Zen Buddhism spread<br>
				- The Mongols of Kublai Khan try to invade Japan but are repelled by a typhoon “kamikaze” (divine wind)
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Muromachi_period" target="_blank">Muromachi/Ashikaga 室町時代・足利時代</a> (1336-1573)</li>
				<p>
				- Muromachi/Ashikaga Shogunate in Kyoto<br>
				- Tea ceremony, Noh drama, Zen gardens<br>
				- Kinkaku-ji & Ginkaku-ji is built<br>
				- Edo is established<br>
				- The Ōnin War is split among feudal lords (daimyōs)<br>
				- Francis Xavier arrives in Japan to introduce Christianity
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Azuchi%E2%80%93Momoyama_period" target="_blank">Azuchi-Momoyama 安土桃山時代</a> (1573-1603)</li>
				<p>
				- Azuchi-Momoyama = Azuchi Castle + Momoyama Castle<br>
				- Oda Nobunaga overthrows Ashikaga Yoshiaki(last 15th shogun)<br>
				- Toyotomi Hideyoshi fights Tokugawa Ieyasu to a standstill at the Battle of Komaki and Nagakute<br>
				- Hideyoshi issues the order of Sword hunt (刀狩, katanagari)<br>
				- Hideyoshi defeats the Hōjō clan, effectively unifying Japan<br>
				- Hideyoshi Banned Christianity later, invaded Korea<br>
				- Hideyoshi built Osaka Castle<br>
				- Battle of Sekigahara (1600) → Tokugawa victory
				</p>
			</ul>
			
			<h1>Early modern:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Edo_period" target="_blank">Edo/Tokugawa 江戸時代・徳川時代</a> (1603-1868)</li>
				<p>
				- Tokugawa shogunate<br>
				- Tokugawa Ieyasu moves government to Edo (Tokyo)<br>
				- Tokugawa Ieyasu bans Christianity from Japan<br>
				- Tokugawa Iemitsu becomes the third shōgun<br>
				- Mount Fuji erupts<br>
				- The US forces Japan to sign a trade agreement ("Treaty of Kanagawa") which reopens Japan to foreigners after two centuries<br>
				- Russia and Japan establish diplomatic relations<br>
				- Sakuradamon Incident<br>
        - Bombardment of Kagoshima<br>
				- bakufu was abolished<br>
				- Bushido values would continue to influence Japanese society long after the samurai ceased to exist
				</p>
			</ul>

			<h1>Modern:</h1>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Meiji_era" target="_blank">Meiji 明治時代</a> (1868-1912)</li>
				<p>
				- Meiji Restoration, restores imperial rule (Emperor Meiji)<br>
				- Western-style government, industry(Industrial Revolution), military<br>
				- Abolishment of samurai class<br>
				- Modernization of society
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Taish%C5%8D_era" target="_blank">Taishō 大正時代 </a>(1912-1926)</li>
				<p>
				- Emperor Taishō (Crown Prince Yoshihito) after death of his father Emperor Meiji<br>
				- Japan declares war on German Empire, joining the Allies side of WWI<br>
				- Japan sends the Twenty-One Demands to China<br>
				- March 1st Movement begins against Japanese colonial rule in Korea<br>
				- Japan helps found the League of Nations<br>
				- The Great Kantō earthquake devastates Tokyo<br>
				- General Election Law was passed, all men above age 25 gained the right to vote
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Sh%C5%8Dwa_era" target="_blank">Shōwa 昭和時代</a> (1926-1989)</li>
				<p>
				- Emperor Shōwa (Emperor Hirohito)<br>
				- Pre-war militarism (Genereal Hideki Tojo)<br>
				- WWII devastation and occupation (Greater East Asian Co-Prosperity Sphere)<br>
				- Post-war: U.S. occupation (1945-1952)
				- Post-war recovery and spectacular economic growth(tech giant)<br>
				- Shibuya incident
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Heisei_era" target="_blank">Heisei 平成時代 </a>(1989-2019)</li>
				<p>
				- Emperor Akihito (eldest son of Emperor Hirohito)<br>
				- 1990s saw an "anime boom" period marked by increased popularity of anime and anime conventions<br>
				- 1995 Kobe Earthquake, 2011 Tohoku Earthquake & Fukushima disaster<br>
				- Japan became global leader in electronics, anime, cars
				</p>

				<li><a href="https://en.wikipedia.org/wiki/Reiwa_era" target="_blank">Reiwa 令和時代</a> (2019-present)</li>
				<p>
				- Emperor Naruhito (eldest son of Emperor Akihito)<br>
				- COVID-19 pandemic<br>
				- 2021 Tokyo Olympics<br>
				- Continued influence in global pop culture
				</p>
			</ul>
			`,

	"Geography":
		`
			<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Japan_topo_en.jpg/1024px-Japan_topo_en.jpg" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Japan_topo_en.jpg/800px-Japan_topo_en.jpg" class="image" align="right"></a>
			
			<p>Japan is divided into <a
					href="https://upload.wikimedia.org/wikipedia/commons/4/43/Regions_and_Prefectures_of_Japan.svg"
					target="_blank">47 prefectures</a> (都道府県「とどうふけん」, todōfuken), which rank immediately below the national
				government and form the country's first level of jurisdiction and administrative division. They include 43
				prefectures proper (県, ken), two urban prefectures (府, fu: Osaka and Kyoto), one regional prefecture (道, dō:
				Hokkaidō) and one metropolis (都, to: Tokyo).
			</p>

			<p>Japan comprises 14,125 islands extending along the Pacific coast of Asia. It stretches over 3000 km (1900 mi)
			northeast-southwest from the Sea of Okhotsk to the East China Sea. The country's five main islands, from north to
			south, are Hokkaido, Honshu, Shikoku, Kyushu and Okinawa. The Ryukyu Islands, which include Okinawa, are a chain
			to the south of Kyushu. The Nanpō Islands are south and east of the main islands of Japan. Together they are often
			known as the Japanese archipelago. As of 2019, Japan's territory is 377,975.24 km<sup>2</sup> (145,937.06 sq mi). Japan has
			the sixth-longest coastline in the world at 29,751 km (18,486 mi). Because of its far-flung outlying islands,
			Japan's exclusive economic zone is the eighth-largest in the world, covering 4,470,000 km<sup>2</sup> (1,730,000 sq mi).
			</p>

			<a href="https://alert.air-worldwide.com/siteassets/ALERT/public/pages/l00_newsalert_for_m6.2_earthquake_in_western_japan_air_seismicity_figure_2_20161021.jpg" target="_blank"><img src="Images/JP tetonic plates.jpg" class="image" align="right"></a>
			
			<p>About 73% of Japan is mountainous, with a mountain range running through each of the main islands. 
			Japan's highest mountain is Mount Fuji, with an elevation of 3,776 m (12,388 ft). Japan's forest cover rate is 68.55% since the mountains are heavily forested.
			</p>
			
			<p>
			Japan is located in the northwestern Ring of Fire on multiple tectonic plates. 
			East of the Japanese archipelago are three oceanic trenches. The Japan Trench is created as the oceanic Pacific Plate subducts beneath the continental Okhotsk Plate. 
			The continuous subduction process causes frequent earthquakes, tsunamis, and stratovolcanoes. The islands are also affected by typhoons. 
			The subduction plates have pulled the Japanese archipelago eastward, created the Sea of Japan, and separated it from the Asian continent by back-arc spreading 15 million years ago.
			</p>
			`,

	"Culture":
		`
			<h1>Aizuchi 相槌</h1>
		<p>Aizuchi 相槌「あいづち」are interjections during a conversation
			that indicate the listener is paying attention or understands the speaker (<strong>backchanneling</strong>). In linguistic terms,
			these are a form of phatic expression. Aizuchi are considered reassuring to the speaker, indicating that the
			listener is active and involved in the discussion.</p>
		<p style="margin-bottom: 0px;":>Here is an example of Aizuchi:</p>
		<video width="300" height="180" controls>
			<source src="Videos/Aizuchi Vid.mp4" type="video/mp4">
		</video>
		<p style="margin: 15px 0px 0px 0px;">Common Aizuchi include:</p>
		<ul>
			<li>hai (はい), ee (ええ), or un (うん; "yes", with varying degrees of formality)</li>
			<li>sō desu ne (そうですね; "I see")</li>
			<li>sō desu ka (そうですか; "is that so?", "really?")</li>
			<li>hontō (本当), hontō ni (本当に), maji (マジ), or (in Kansai) honma (本真; "really?")</li>
			<li>naruhodo (なるほど; "I see", "that's right")</li>
			<li>nodding: These have a similar function to English "yeah", "yup", "OK", "really?", "uh-huh", "oh", and so on</li>
		</ul>

		<h1>Shintō 神道⛩️ VS Buddhism 仏教🧘</h1>
		<table>
			<colgroup>
				<col style="width: 20%;">
				<col style="width: 40%;">
				<col style="width: 40%;">
			</colgroup>

			<tr style="font-weight: bold;">
				<td>Differences</td>
				<td>Shintō 神道⛩️</td>
				<td>Buddhism 仏教🧘</td>
			</tr>

			<tr>
				<td>Ideology</td>
				<td><strong>Custom / Tradition</strong> focused on nature and community</td>
				<td><strong>Philosophy</strong> of life and suffering (seeking enlightenment)</td>
			</tr>

			<tr>
				<td>Place of worship</td>
				<td>
					Shinto shrines (<strong>jinja 神社</strong>) <br>
					- believe in many kami神
				</td>
				<td>
					Buddhist temples (<strong>ji 寺</strong>) <br>
					- get enlightened & live happily <br>
					- the more we try to get away, the more suffering we become (生老病死)
				</td>
			</tr>

			<tr>
				<td>Buildings</td>
				<td>
					Entrance: <strong>torii 鳥居⛩️</strong> <br>
					※middle pathway is for the gods, enter/leave via left/right side of the gate, take a small bow when entering/leaving 
					<br><br>

					<strong>chōzu-ya/temizu-ya 手水舎</strong><br>
					- the place where you wash your hands <br>
					<img src="Images/temizuya steps.png" width="100%" class="image">
				</td>
				<td>
					Entrance: <strong>shikii 敷居</strong><br>
					※do not step on it <br>
					<img src="Images/shikii.png" width="100%" class="image">
					<br><br>

					<strong>pagoda 仏塔</strong>
				</td>
			</tr>

			<tr>
				<td>Praying methods</td>
				<td>
					- throw coin as offering <br>
					1) bow X2 <br>
					2) clap X2 <br>
					3) pray <br>
					4) bow
				</td>
				<td>
					- throw coin as offering <br>
					- ring bell <br>
					1) pray <br>
					2) bow
				</td>
			</tr>
		</table>
			`,

	"Food":
		`
					<h1>Sushi すし</h1>
		<p>
			Sushi (すし, 寿司, 鮨, 鮓) is a traditional Japanese dish made with vinegared rice (鮨飯, sushi-meshi), typically seasoned with sugar and salt, 
			and combined with a variety of ingredients (ねた, neta), such as seafood, vegetables, or meat: raw seafood is the most common, although some may be cooked. 
			The modern form of sushi is believed to have been created by Hanaya Yohei, who invented nigiri-zushi, the most commonly recognized type today,
			in which seafood is placed on hand-pressed vinegared rice.
		</p>
		<p>
			The earliest written mention of sushi in English described in the Oxford English Dictionary is in an 1893 book, A Japanese Interior, 
			where it mentions sushi as "a roll of cold rice with fish, sea-weed, or some other flavoring".
		</p>

		<h1>Types of Sushi 寿司の種類</h1>
		<ul>
			<li><h2>Sashimi 刺身</h2></li>
			<img src="Images/Sushi/sashimi.jpg" width="200px">
			<p>
				Fresh raw fish or meat sliced into thin pieces.
			</p>

			<li><h2>Nigiri 握り</h2></li>
			<img src="Images/Sushi/nigiri.jpg" width="200px">
			<p>
				Seafood that is placed on hand-pressed vinegared rice.
			</p>

			<li><h2>Maki 巻き</h2></li>
				<ul>
					<li><h2>Hosomaki 細巻き</h2></li>
					<img src="Images/Sushi/hosomaki.jpg" width="200px">
					<p>
						Thin sushi rolls cut into perfect bite-sized pieces.
					</p>

					<li><h2>Futomaki 太巻き</h2></li>
					<img src="Images/Sushi/futomaki.jpg" width="200px">
					<p>
						Thick sushi rolls cut into perfect bite-sized pieces.
					</p>

					<li><h2>Uramaki 裏巻き</h2></li>
					<img src="Images/Sushi/uramaki.jpg" width="200px">
					<p>
						Sushi rice, filling and a sheet of seaweed, rolled so that the seaweed is on the inside and the rice on the outside.
					</p>

					<li><h2>Temaki 手巻き</h2></li>
					<img src="Images/Sushi/temaki.jpg" width="200px">
					<p>
						Sushi where the nori (or seaweed) is filled with rice and toppings and then hand-rolled into the shape of a cone.
					</p>
				</ul>

			<li><h2>Gunkan 軍艦寿司</h2></li>
			<img src="Images/Sushi/gunkanzushi.jpg" width="200px">
			<p>
				 Literally means "Battleship" and consists of sushi rice wrapped in a band of nori seaweed and topped with various ingredients.
			</p>

			<li><h2>Hako/Oshi 箱寿司・押し寿司</h2></li>
			<img src="Images/Sushi/hakozushi.jpg" width="200px">
			<p>
				A traditional Japanese sushi where ingredients are pressed into a rectangular mold, typically wooden, to create a layered, compact block.
			</p>

			<li><h2>Temari 手毬寿司</h2></li>
			<img src="Images/Sushi/temarizushi.jpg" width="200px">
			<p>
				Originated from Kyoto, a type of Japanese sushi shaped like a small ball, resembling a temari (hand ball).
			</p>

			<li><h2>Inari 稲荷</h2></li>
			<img src="Images/Sushi/inari.jpg" width="200px">
			<p>
				Sushi consisting of seasoned sushi rice stuffed into a pouch of fried tofu called abura-age.
			</p>

			<li><h2>Chirashi 散らし寿司</h2></li>
			<p>
				Literally means "scattered sushi", is a Japanese dish featuring a bed of seasoned sushi rice topped with a colorful array of ingredients like 
				sashimi, tamago, vegetables, and cooked seafood.<br>
				It is eaten annually on Hinamatsuri(Girls' Day/Dolls' Day) in March and Children's Day in May.
			</p>
			<ul>
				<li><h2>Edomae chirashi 江戸前ちらし・生ちらし・吹き寄せちらし (Tokyo Style)</h2></li>
				<p>
				It is a dish that became popular after the Meiji period as a spin-off of Edomae nigiri sushi. 
				It is also called nama chirashi生ちらし or fukiyose chirashi吹き寄せちらし. While there is a theory that sushi rice that is not vinegared is generally called kaisendon海鮮丼, 
				there are also sushi restaurants that serve sushi rice topped with seafood, and the distinction between the two names is unclear.<br>
				The toppings of this chirashi bowl include a variety of raw and cooked seafood. Tamago, oboro, kanpyo, snow peas, lotus root, and kinome are also common. Wasabi and gari are standard, as well. 
				</p>
				<ul>
					<li><h2>Bara chirashi ばらちらし</h2></li>
					<img src="Images/Sushi/barachirashi.jpg" width="200px">
					<p>
					Bara chirashi is a substyle made with smaller pieces of cubed raw, marinated seafood. 
					</p>

					<li><h2>Tsugeana chirashi つげあなちらし</h2></li>
					<img src="Images/Sushi/tsugeanachirashi.jpg" width="200px">
					<p>
					A new dish created by a sushi restaurant in Ginza. Finely chopped squid, octopus, shrimp, tamagoyaki (Japanese omelette), salmon roe and other ingredients are mixed into vinegared rice, and it is topped with marinated tuna, boiled conger eel and raw quail eggs.
					</p>
				</ul>

				<li><h2>Gomoku chirashi 五目ちらし (Osaka Style)</h2></li>
				<img src="Images/Sushi/gomoku chirashi.jpg" width="200px">
				<p>
				Gomoku chirashi uses cooked ingredients over sushi rice. There's often a layer of thinly sliced tamago in between.<br>
				Boiled ebi, surimi (fish cake), lotus root, bamboo shoots, shiitake, beni shoga, and kanpyo are some of the more popular ingredients.
				</p>
			</ul>
		</ul>

		<h2>Western Sushi</h2>
		<ul>
			<li><h2>California roll</h2></li>
			<li><h2>Dragon roll</h2></li>
			<li><h2>Dynamite roll</h2></li>
			<li><h2>Spider-maki roll</h2></li>
		</ul>

		<h1>Ramen ラーメン</h1>
		<h2>Soup Base/Dashi 出汁:</h2>
		<p>Ramen soup is generally made from chicken or pork, though vegetable and fish stock is also used. This base stock is often combined with dashi出汁 stock components such as katsuobushi (skipjack tuna flakes), niboshi (dried baby sardines), saba bushi (mackerel flakes), shiitake, and kombu (kelp). Ramen stock is usually divided into two categories: chintan and paitan.</p>
		<ul>
			<li><h2>Chintan 清湯出汁</h2></li>
			<p>Chintan is a clear, unclouded broth. It is prepared at a temperature just below boiling. Some restaurants avoid even the slightest cloudiness and use egg whites to remove the cloudiness. Compared to plain broth, it generally has a cleaner flavor and taste.</p>
			<img src="Images/Ramen/chintan.jpg" width="200px">
			<ul>
				<li><h2>Pork bone(pork knuckle etc.) dashi 豚骨（豚ゲンコツなど）出汁</h2></li>
				<p>A pork bone-based dashi with added vegetables and other ingredients, but since it is standard, it is rarely specifically labeled. It is a rich, versatile type. It is particularly popular in traditional Sapporo ramen.</p>

				<li><h2>Chicken bone dashi 鶏ガラ出汁</h2></li>
				<p>A dashi made by boiling chicken bones, dried sardines, and vegetables. Its color ranges from nearly colorless to slightly yellowish, but most are clear. It is clean and can be paired with a variety of sauces, including soy sauce, salt, and miso.</p>

				<li><h2>Chicken bone and pork knuckle mixed dashi 鶏ガラ豚ゲンコツ混合出汁</h2></li>
				<p>A dashi made with chicken bones and pork knuckles, along with a variety of vegetables, seafood, and sometimes fruit, that combines a certain degree of richness with a clean flavor. It is versatile when paired with sauces.</p>

				<li><h2>Beef dashi 牛出汁</h2></li>
				<p>A type of broth used only in certain regions, made from beef tendons, bones, and vegetables. It is mainly used in ramen with names that refer to the ingredients, such as "beef broth."</p>

				<li><h2>Seafood dashi 魚介出汁</h2></li>
				<p>A broth based on seafood, including shaved fish, dried sardines, and grilled flying fish. It has a distinctive seafood flavor.</p>
			</ul>

			<li><h2>Paitan 白湯出汁</h2></li>
			<p>Paitan is a broth with an opaque white colored appearance and a creamy consistency that rivals milk, melted butter or gravy (depending on the shop). Paitan stock is made by boiling pork or chicken bones at a high heat for hours , allowing the bones to emulsify into the soup, resulting in a rich taste and flavor.</p>
			<ul>
				<li><h2>Tonkotsu 豚白湯（ブタパイタン）出汁・豚骨出汁</h2></li>
				<img src="Images/Ramen/tonkotsu.jpg" width="200px">
				<p>Pork bone stock</p>

				<li><h2>Toripaitan 鳥白湯（トリパイタン）出汁</h2></li>
				<img src="Images/Ramen/toripaitan.jpg" width="200px">
				<p>Chicken stock</p>
			</ul>

			<li><h2>Kare(JP Curry) カレー出汁</h2></li>
			<img src="Images/Ramen/kare ramen.jpg" width="200px">
			<p>There are various dashi bases, and curry ramen specialty shops often use spices that go well with the curry sauce and dashi with a curry flavor.</p>
		</ul>

		<h2>Tare タレ</h2>
		<p>Tare is a sauce that is used to flavor the broth. The main purpose of tare is to provide salt to the broth, but tare also usually adds other flavors, such as umami. There are three main kinds of tare.</p>
		<ul>
			<li><h2>Shio 塩</h2></li>
			<img src="Images/Ramen/shio.jpg" width="200px">

			<li><h2>Shoyu 醤油</h2></li>
			<img src="Images/Ramen/shoyu.jpg" width="200px">

			<li><h2>Miso 味噌</h2></li>
			<img src="Images/Ramen/miso.jpg" width="200px">
		</ul>

		<h2>Soup Thickeness:</h2>
		<ul>
			<li><h2>heavy (kotteri こってり)</h2></li>
			<li><h2>normal (futsu 普通)</h2></li>
			<li><h2>light (assari あっさり)</h2></li>
		</ul>

		<h2>Noodles Hardness:</h2>
		<ul>
			<li><h2>hard (katame 硬め)</h2></li>
			<li><h2>normal (futsu 普通)</h2></li>
			<li><h2>soft (yawarakame 柔らかめ)</h2></li>
		</ul>

		<h2>Toppings 具:</h2>
		<ul>
			<li><h2>Chāshū チャーシュー (sliced roasted or red cooked pork)</h2></li>
			<li><h2>Negi ネギ (green onion)</h2></li>
			<li><h2>Takana-zuke 高菜漬け (pickled and seasoned mustard leaves)</h2></li>
			<li><h2>Boiled egg ゆで卵 or soft boiled egg 半熟卵 (soy egg, ajitsuke tamago 味付け卵 or ajitama 味玉)</h2></li>
			<li><h2>Menma メンマ (Chinese lacto-fermented bamboo shoots called sunsi), formerly known as shinachiku 支那竹 in Japan</h2></li>
			<li><h2>Nori 海苔 (dried seaweed)</h2></li>
			<li><h2>Kamaboko 蒲鉾 (formed fish paste, often in a pink and white spiral called narutomaki 鳴門巻き)</h2></li>
			<li><h2>Kikurage 木耳「キクラゲ」(wood ear mushroom)</h2></li>										
		</ul>

		<h2>Gomoku ramen/soba 五目ラーメン・五目蕎麦</h2>
		<img src="Images/Ramen/gomoku soba.jpg" width="200px">
		<p>Gomoku soba comes with a variety of toppings, including meat, vegetables, boiled eggs, wood ear mushrooms, and Narutomaki rolls. (5 ingredients)</p>
		
		<h2>Kaedama 替え玉</h2>
		<p>Kaedama is where customers who have finished their noodles can request a "refill" (for a few hundred yen more) to be put into their remaining soup.</p>

				<h1>Regional Ramen ご当地ラーメン</h1>
		<a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3#%E3%81%94%E5%BD%93%E5%9C%B0%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3" target="_blank">もっと情報</a>

		<h1>Hokkaido 北海道</h1>
		<ul>
			<li><h2>Sapporo ramen 札幌ラーメン (Sapporo, Hokkaido 北海道札幌市)</h2></li>
			<img src="Images/Ramen/Sapporo ramen.jpg" width="200px">
			<p>
				Sapporo ramen was supposedly created during the postwar years as a pork bone broth soup flavored with soy sauce. One day, some customers began asking for noodles in tonjiru (miso soup with pork and vegetables).
				Sapporo miso ramen is typically topped with sweetcorn, butter, bean sprouts, finely chopped pork, and garlic, and sometimes local seafood such as scallop, squid, and crab.
			</p>

			<li><h2>Hakodate ramen 函館ラーメン (Hakodate, Hokkaido 北海道函館市)</h2></li>
			<img src="Images/Ramen/Hakodate ramen.jpg" width="200px">
			<p>
				Said to be influenced by Cantonese cuisine, Hakodate ramen consists of a clear soup made from kelp, vegetables, and pork or chicken bones, flavoured with salt tare. 
				The noodles are straight and tender, and the bowl is finished with classic ramen toppings like bamboo shoots, chashu (sliced braised pork belly), and spring onions. 
				Simple, elegant, and delicious. It's ideal when you're craving ramen but don't want to feel too full afterwards. 
			</p>

			<li><h2>Asahikawa ramen 旭川ラーメン (Asahikawa, Hokkaido 北海道旭川市)</h2></li>
			<img src="Images/Ramen/Asahikawa ramen.jpg" width="200px">
			<p>
				Asahikawa ramen is special for its double broth: a combination of a seafood-based soup and a rich blend of pork, chicken and vegetable soup, 
				which is then flavoured with a soy sauce tare (concentrated sauce). A layer of lard on top keeps the soup hot and coats the springy, frizzy noodles beautifully.
				Many shops use classic toppings like chashu and bamboo shoots, but some typically opt for quintessential Asahikawa-style toppings like tontoro (fatty pork) and offal. 
			</p>
		</ul>

		<h1>Tohoku 東北</h1>
		<ul>
			<li><h2>Kitakata ramen 喜多方ラーメン (Kitakata, Fukushima 福島県喜多方市)</h2></li>
			<img src="Images/Ramen/Kitakata ramen.jpg" width="200px">
			<p>
				Kitakata ramen is known for its rather thick, flat, curly noodles served in a pork-and-niboshi broth. 
				Ramen has such prominence in the region that locally, the word soba usually refers to ramen, and not to actual soba which is referred to as nihon soba ('Japanese soba').
			</p>

			<li><h2>Hiyashi ramen 冷やしラーメン (Yamagata 山形県山形市)</h2></li>
			<img src="Images/Ramen/hiyashi ramen.jpg" width="200px">
			<p>
				The first owner of Sakaeya Honten, a ramen shop in Honmachi, Yamagata City, began developing this ramen in response to requests from regular customers who wanted to eat cold ramen in the summer,
				and after a year of trial and error, he completed it in 1952. Located in a basin, the summer heat is intense, and demand for hot ramen is low, so ramen was also made cold, 
				inspired by cold soba noodles, according to ramen critic Hirofumi Osaki. Yamagata ramen is overwhelmingly soy sauce flavored, and the majority of chilled ramen in Yamagata (inland) is also soy sauce flavored.
			</p>
		</ul>

		<h1>Kanto 関東</h1>
		<ul>
			<li><h2>Tokyo ramen 東京ラーメン (Tokyo 東京を中心とする首都圏)</h2></li>
			<img src="Images/Ramen/Tokyo ramen.jpg" width="200px">
			<p>
				Tokyo-style ramen consists of slightly thin, curly noodles served in a soy-flavored chicken broth. The Tokyo-style broth typically has a touch of dashi, as old ramen establishments in Tokyo often originate from soba eateries. 
				Standard toppings are chopped scallion, menma, sliced pork, kamaboko, egg, nori, and spinach. Ikebukuro池袋, Ogikubo荻窪 and Ebisu恵比寿 are three areas in Tokyo known for their ramen.
			</p>

			<li><h2>Yokohama ie-kei ramen 横浜家系ラーメン (Yokohama, Kanagawa 神奈川県横浜市)</h2></li>
			<img src="Images/Ramen/Yokohama ramen.jpg" width="200px">
			<p>
				It features a rich soup based on pork bones and chicken bones, a special soy sauce sauce, and extra-thick noodles. The origin of this ramen is Yoshimuraya, which was founded in 1974, 
				and the restaurants that were trained at the same restaurant and then opened their own branches in various places have taken on the name "Yoshimuraya," hence the name "Iekei."
			</p>

			<li><h2>Aburasoba 油そば (Musashino, Tokyo 東京都武蔵野市)</h2></li>
			<img src="Images/Ramen/aburasoba.jpg" width="200px">
			<p>
				Ramen originated in Musashino City, Tokyo, and is popular in the Tama多摩 area. It has no soup, and is eaten by coating warm noodles in a rich sauce, which is often soy sauce-based. 
				Toppings include chopped green onions, garlic, eggs, roasted pork, and bamboo shoots.
			</p>

			<li><h2>Tsukemen(Dipping noodles) つけ麺 (Tokyo 東京都)</h2></li>
			<img src="Images/Ramen/tsukemen.jpg" width="200px">
			<p>
				The noodles and soup are served in separate bowls. The diner dips the noodles in the soup before eating. Can be served hot or chilled.
			</p>
		</ul>

		<h1>Chubu 中部</h1>
		<ul>
			<li><h2>Takayama ramen 高山ラーメン (Takayama, Gifu 岐阜県高山市)</h2></li>
			<img src="Images/Ramen/Takayama ramen.jpg" width="200px">
			<p>
				This ramen is a simple combination of soy sauce-flavored soup and thin, curly noodles. Locally, it is called chuka soba中華そば.
			</p>
		</ul>

		<h1>Kinki(region around Osaka, Kyoto, Nara) 近畿</h1>
		<ul>
			<li><h2>Kyoto ramen 京都ラーメン (Kyoto 和歌山県和歌山市)</h2></li>
			<img src="Images/Ramen/Kyoto ramen.jpg" width="200px">
			<p>
				There are four main types of ramen: thick pork bone soy sauce, thick chicken white soup, pitch black soy sauce (Kyoto Black), and back fat chacha. 
				Many ramen are also generously topped with Kujo negi (green onions). There are many areas known as ramen battlegrounds, including Ichijoji一乗寺, Sakyo Ward左京区, and Fushimi Ward伏見区.
			</p>

			<li><h2>Takaida ramen 高井田ラーメン (Takaida, Higashiosaka, Osaka 大阪府東大阪市高井田)</h2></li>
			<img src="Images/Ramen/Takaida ramen.jpg" width="200px">
			<p>
				It is special for its extra-thick straight noodles and rich soy sauce flavor. The name is said to come from the Osaka City Bus Takaida bus stop (which is located in a different area from the Takaida area of Higashiosaka).
			</p>

			<li><h2>Wakayama ramen 和歌山ラーメン (Wakayama 和歌山県和歌山市)</h2></li>
			<img src="Images/Ramen/Wakayama ramen.jpg" width="200px">
			<p>
				They are divided into soy sauce and pork bone soy sauce varieties. The soy sauce variety originates from the food stalls that lined the streetcar stations that ran through the center of Wakayama City. 
				It looks dark brown, but is surprisingly light when you eat it. It is the mainstream of Wakayama chuka soba today. 
				The pork bone soy sauce variety has a rich, mellow pork bone soup that is exquisitely intertwined with soy sauce, giving it a deep flavor. 
				When people across the country talk about "Wakayama ramen," they are often referring to this flavor. In both varieties, the noodles are straight and slightly stringy, and the toppings include roast pork, kamaboko, bamboo shoots, and green onions.
			</p>
		</ul>

		<h1>Chugoku 中国</h1>
		<ul>
			<li><h2>Hiroshima ramen 広島ラーメン (Hiroshima 広島県広島市)</h2></li>
			<img src="Images/Ramen/Hiroshima ramen.jpg" width="200px">
			<p>
				It has a cloudy pork bone broth with seafood added, and is heavily flavored with soy sauce. The noodles are straight. Toppings include green onions, roasted pork fillets, bamboo shoots, and bean sprouts.
			</p>

			<li><h2>Tottori gyukotsu ramen 鳥取牛骨ラーメン (Kurayoshi, Tottori 鳥取県倉吉市)</h2></li>
			<img src="Images/Ramen/Tottori gyukotsu ramen.jpg" width="200px">
			<p>
				The soup is soy sauce-based and made with beef bone stock, and the curly noodles are topped with ingredients such as bean sprouts, bamboo shoots, and green onions.
			</p>
		</ul>

		<h1>Shikoku 四国</h1>
		<ul>
			<li><h2>Nabeyaki ramen 鍋焼きラーメン (Susaki, Kochi 高知県須崎市)</h2></li>
			<img src="Images/Ramen/nabeyaki ramen.jpg" width="200px">
			<p>
				The soup is made with chicken bones and soy sauce as the base, and the toppings include chicken meat, green onions, raw eggs, chikuwa (fish cakes), etc. It is served piping hot in a clay pot (sometimes an enamel pot or iron pot).
			</p>
		</ul>

		<h1>Kyushu 九州</h1>
		<ul>
			<li><h2>Hakata ramen 博多ラーメン (Fukuoka 福岡県福岡市)</h2></li>
			<img src="Images/Ramen/hakata ramen.jpg" width="200px">
			<p>
				It originated in the Meiji period when noodles were added as a finishing touch to "mizutaki." Originally, it was based on chicken soup and soy sauce, to which pork heads and backbones, 
				which have little odor and fat, were mixed and simmered slowly to create a thick, cloudy soup with a strong gelatinous quality.
			</p>
		</ul>
		
		<h1>Okinawa 沖縄</h1>
		<ul>
			<li><h2>Okinawa ramen 沖縄ラーメン (Naha, Okinawa 沖縄県那覇市)</h2></li>
			<img src="Images/Ramen/Okinawa soba.jpg" width="200px">
			<p>
				It is special for its thick noodles made with wheat flour instead of buckwheat flour, kneaded with kansui鹹水, and its rich broth made with pork bones and bonito flakes. 
				The standard toppings on top of the noodles used to be simmered pork belly, kamaboko (fish cake), green onions, and pickled ginger, 
				but in recent years there has been a wide variety of toppings, such as soki soba, cartilage soki soba, and vegetable soba. In addition, the noodles and toppings vary depending on the region, and examples include Miyako soba and Yaeyama soba.
			</p>
		</ul>
			`,

	"Attractions":
		`
				<p style="font-size: 20px; margin-bottom: 0px;">Here are some famous tourist attractions:</p>
				<!-- Copied Script -->
				<div class="navbar">
					<a onclick="showPlaceDesc('Mt. Fuji')">Mt. Fuji</a>

					<div class="dropdown">
						<button class="dropBtn" onclick="toggleDropdown('myDropdown')">Tokyo</button>
						<div class="dropdown-content" id="myDropdown">
							<a onclick="showPlaceDesc('Tokyo Skytree')">Tokyo Skytree</a>
							<a onclick="showPlaceDesc('Shibuya Crossing')">Shibuya Crossing</a>
							<a onclick="showPlaceDesc('Sensō-ji')">Sensō-ji</a>
						</div>
					</div>

					<div class="dropdown">
						<button class="dropBtn" onclick="toggleDropdown('myDropdown2')">Osaka</button>
						<div class="dropdown-content" id="myDropdown2">
							<a onclick="showPlaceDesc('Dotonbori')">Dotonbori</a>
							<a onclick="showPlaceDesc('USJ')">USJ</a>
							<a onclick="showPlaceDesc('Osaka Castle')">Osaka Castle</a>
						</div>
					</div>
				</div>
				<!-- Until Here -->
				
				<div class="placeDesc"></div>
			`,
}

function checkDescContent() {
	if (description.innerHTML.trim() === "") {
		description.style.display = "none"
	} else { description.style.display = "block" }
}

checkDescContent();

let currentClicked = null;

function onClickBtn(btnName) {
	const btns = document.querySelectorAll(".btn");
	const desc = document.querySelector(".description")

	if (currentClicked === btnName) {
		for (const btn of btns) {
			btn.classList.remove("clicked");
			desc.innerHTML = "";
			description.style.display = "none"
		}
		currentClicked = null;

	} else {
		for (const btn of btns) {
			const topic = btn.dataset.topic;

			if (topic === btnName) {
				btn.classList.add("clicked");
			} else {
				btn.classList.remove("clicked");
			}
		}
		currentClicked = btnName;
	}
}

function updateText(topic) {
	description.innerHTML = topics[topic];
	checkDescContent();
}

// ATTRACTIONS
function showPlaceDesc(place) {
	const placeDesc = document.querySelector(".placeDesc");
	const places = {
		"Mt. Fuji":
			`
        <h1>Mt. Fuji 富士山</h1>
				<img src="Images/Attractions/Mt. Fuji.jpg" width="400px">
        <p>Mt. Fuji is the highest mountain in Japan, the second-highest volcano on any Asian island (after Mount Kerinci on the Indonesian island of Sumatra), 
				and seventh-highest peak of an island on Earth.
				</p>
				<p>
				Mt. Fuji last erupted from 1707 to 1708.
				It is located about 100 km (62 mi) southwest of Tokyo, from where it is visible on clear days. 
				Its exceptionally symmetrical cone, which is covered in snow for about five months of the year, 
				is a Japanese cultural icon and is frequently depicted in art and photography, 
				as well as visited by sightseers, hikers and mountain climbers.
				</p>
        `,

		"Tokyo Skytree":
			`
				<h1>Tokyo Skytree 東京スカイツリー</h1>
				<img src="Images/Attractions/Tokyo Skytree.jpg" height="300px">
        <p>
				Tokyo Skytree is a broadcasting and observation tower, located in Sumida, Tokyo, Japan.
				It has been the tallest tower in Japan since opening in 2012 and reached its full height of 634 meters (2,080 ft) in early 2011, 
				making it the tallest tower in the world, displacing the Canton Tower,
				 and the third tallest structure in the world behind Merdeka 118 (678.9 m or 2,227 ft) and Burj Khalifa (829.8 m or 2,722 ft).
				</p>
        `,

		"Shibuya Crossing":
			`
				<h1>Shibuya Scramble Crossing 渋谷スクランブル交差点</h1>
				<img src="Images/Attractions/Shibuya Crossing.jpg" width="400px">
        <p>
				Shibuya Crossing is a popular pedestrian scramble crossing in Shibuya, Tokyo, Japan.
				It is located in front of the Shibuya Station Hachikō exit and stops vehicles in all directions to allow pedestrians to inundate the entire intersection. 
				The statue of Hachikō, was erected in 1932 and subsequently rebuilt in 1948 to honor the dog's legendary loyalty, 
				stands between the station and the intersection. It serves as a common and frequently crowded meeting place.
				</p>
        `,

		"Sensō-ji":
			`
				<h1>Sensō-ji 浅草寺</h1>
				<img src="Images/Attractions/Sensoji.png" width="400px">
        <p>
				Sensō-ji, also known as Asakusa Kannon Temple is an ancient Buddhist temple in Asakusa, Tokyo, Japan. It is Tokyo's oldest-established temple, and one of its most significant. 
				When approaching the temple, visitors first enter through the Kaminarimon (雷門 Thunder Gate), the outer gate of Sensoji Temple and the symbol of Asakusa and the entire city of Tokyo.
				</p>
				<p>
				The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, 
				and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. 
				The temple was completed in 645, making it Tokyo's oldest temple.
				</p>
        `,

		"Dotonbori":
			`
				<h1>Dotonbori 道頓堀</h1>
				<img src="Images/Attractions/dotonbori.jpg" width="400px">
        <p>
				Dotonbori is a district in Osaka, Japan. Known as one of Osaka's principal tourist and nightlife areas, 
				the area runs along the Dōtonbori canal from Dōtonboribashi Bridge to Nipponbashi Bridge in the Namba district of the city's Chūō ward. 
				Historically a theater district, it is now a popular nightlife and entertainment area characterized by its eccentric atmosphere and large illuminated signboards.
				</p>
				<p>
				One of the area's most prominent features is an illuminated billboard for confectionery company Glico displaying the image of a runner crossing a finishing line, 
				which is often seen as an icon of Osaka within Japan for 90 years. First installation was in 1935.
				</p>
        `,

		"USJ":
			`
      	<h1>USJ ユニバーサル・スタジオ・ジャパン</h1>
				<a href="https://vacaywork.com/wp-content/uploads/2023/03/image-1.png" target="_blank"><img src="Images/Attractions/USJ.png" width="400px"></a>
				<p>
				Dotonbori is a theme park located in Osaka, Japan. Opened on March 31, 2001, it is one of six Universal Studios theme parks worldwide and was the first to open outside the United States.
				Its eleventh area, Super Nintendo World, opened after several delays on 18 March 2021.
				</p>
        `,

		"Osaka Castle":
			`
				<h1>Osaka Castle 大阪城</h1>
				<img src="Images/Attractions/Osaka castle.jpg" width="400px">
        <p>
				Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.
				The basic plan was modeled after Azuchi Castle, the headquarters of Oda Nobunaga. Hideyoshi wanted to build a castle that mirrored Nobunaga's but surpassed it in every way.
				</p>
        `,
	};

	if (placeDesc) {
		placeDesc.innerHTML = places[place];
	}
}