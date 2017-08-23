# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: "guest", password: "password")

Book.destroy_all

Book.create!(title: "Hitchhiker's Guide To The Galaxy",
            author: "Douglas Adams",
            image_url: "http://i.imgur.com/DnbT4KB.jpg",
            publisher: "Del Rey",
            description: "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.

Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers: Zaphod Beeblebrox, the two-headed, three-armed, ex-hippie and totally out-to-lunch president of the galaxy; Trillian (formerly Tricia McMillan), Zaphod’s girlfriend, whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; and Veet Voojagig, a former graduate student obsessed with the disappearance of all the ballpoint pens he’s bought over the years.

Where are these pens? Why are we born? Why do we die? For all the answers, stick your thumb to the stars!")

Book.create!(title: "Slaughterhouse-Five",
            author: "Kurt Vonnegut",
            image_url: "http://i.imgur.com/8pbh3jO.jpg",
            publisher: "Dial Press Trade Paperback",
            description: "Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time after he is abducted by aliens from the planet Tralfamadore. In a plot-scrambling display of virtuosity, we follow Pilgrim simultaneously through all phases of his life, concentrating on his (and Vonnegut's) shattering experience as an American prisoner of war who witnesses the firebombing of Dresden.

Don't let the ease of reading fool you - Vonnegut's isn't a conventional, or simple, novel. He writes, There are almost no characters in this story, and almost no dramatic confrontations, because most of the people in it are so sick, and so much the listless playthings of enormous forces. One of the main effects of war, after all, is that people are discouraged from being characters.

Slaughterhouse-Five is not only Vonnegut's most powerful book, it is also as important as any written since 1945. Like Catch- 22, it fashions the author's experiences in the Second World War into an eloquent and deeply funny plea against butchery in the service of authority. Slaughterhouse-Five boasts the same imagination, humanity, and gleeful appreciation of the absurd found in Vonnegut's other works, but the book's basis in rock-hard, tragic fact gives it a unique poignancy - and humor.")

Book.create!(title: "Ubik",
            author: "Philip K. Dick",
            image_url: "http://i.imgur.com/6Zeayhh.jpg",
            publisher: "Bantam Books",
            description: "Ubik is a 1969 science fiction novel by American writer Philip K. Dick. It is one of Dick's most acclaimed novels. It was chosen by Time magazine as one of the 100 greatest novels since 1923. In his review for Time, critic Lev Grossman described it as a deeply unsettling existential horror story, a nightmare you'll never be sure you've woken up from.

The novel takes place in the North American Confederation of 1992, where civilians regularly travel to the Moon, and psi phenomena are common. The novel's protagonist, Joe Chip, is a debt-ridden technician for Glen Runciter's prudence organization, which employs people with the ability to block psychic powers (like an anti-telepath, preventing a telepath from reading a mind) to help enforce privacy. Runciter runs the company with the assistance of his deceased wife Ella, who is kept in a state of half-life, a form of cryonic suspension that gives the deceased limited consciousness and the ability to communicate.")

Book.create!(title: "All You Need Is Kill",
            author: "Hiroshi Sakurazaka",
            image_url: "http://i.imgur.com/9u199q8.jpg",
            publisher: "Haikasoru",
            description: "There’s one thing worse than dying. It’s coming back to do it again and again… When the alien Gitai invade, Keiji Kiriya is just one of many raw recruits shoved into a suit of battle armor and sent out to kill. Keiji dies on the battlefield, only to find himself reborn each morning to fight and die again and again. On the 158th iteration though, he sees something different, something out of place: the female soldier known as the Witch of War. Is the Witch the key to Keiji’s escape, or to his final death?")

Book.create!(title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            image_url: "http://i.imgur.com/h2lCssT.jpg",
            publisher: "Scholastic Inc",
            description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.

After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.

Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.

Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.")

Book.create!(title: "The Caves of Steel",
            author: "Isaac Asimov",
            image_url: "http://i.imgur.com/XGxTgmj.jpg",
            publisher: "Voyager",
            description: "A millennium into the future two advancements have altered the course of human history: the colonization of the galaxy and the creation of the positronic brain. Isaac Asimov's Robot novels chronicle the unlikely partnership between a New York City detective and a humanoid robot who must learn to work together. Like most people left behind on an over-populated Earth, New York City police detective Elijah Baley had little love for either the arrogant Spacers or their robotic companions. But when a prominent Spacer is murdered under mysterious circumstances, Baley is ordered to the Outer Worlds to help track down the killer. The relationship between Life and his Spacer superiors, who distrusted all Earthmen, was strained from the start. Then he learned that they had assigned him a partner: R. Daneel Olivaw. Worst of all was that the 'R' stood for robot--and his positronic partner was made in the image and likeness of the murder victim!")

Book.create!(title: "Console Wars: Sega, Nintendo, and the Battle that Defined a Generation",
            author: "Blake J. Harris",
            image_url: "http://i.imgur.com/FqUrwSo.jpg",
            publisher: "It Books",
            description: "Following the success of The Accidental Billionaires and Moneyball comes Console Wars—a mesmerizing, behind-the-scenes business thriller that chronicles how Sega, a small, scrappy gaming company led by an unlikely visionary and a team of rebels, took on the juggernaut Nintendo and revolutionized the video game industry.

In 1990, Nintendo had a virtual monopoly on the video game industry. Sega, on the other hand, was just a faltering arcade company with big aspirations and even bigger personalities. But that would all change with the arrival of Tom Kalinske, a man who knew nothing about videogames and everything about fighting uphill battles. His unconventional tactics, combined with the blood, sweat and bold ideas of his renegade employees, transformed Sega and eventually led to a ruthless David-and-Goliath showdown with rival Nintendo.

The battle was vicious, relentless, and highly profitable, eventually sparking a global corporate war that would be fought on several fronts: from living rooms and schoolyards to boardrooms and Congress. It was a once-in-a-lifetime, no-holds-barred conflict that pitted brother against brother, kid against adult, Sonic against Mario, and the US against Japan.

Based on over two hundred interviews with former Sega and Nintendo employees, Console Wars is the underdog tale of how Kalinske miraculously turned an industry punchline into a market leader. It's the story of how a humble family man, with an extraordinary imagination and a gift for turning problems into competitive advantages, inspired a team of underdogs to slay a giant and, as a result, birth a $60 billion dollar industry.")

Book.create!(title: "BioShock: Rapture",
            author: "John Shirley",
            image_url: "http://i.imgur.com/3QPn1oA.jpg",
            publisher: "Tor Books",
            description: "It's the end of World War II. FDR's New Deal has redefined American politics. Taxes are at an all-time high. The bombing of Hiroshima and Nagasaki has brought a fear of total annihilation. The rise of secret government agencies and sanctions on business has many watching their backs. America's sense of freedom is diminishing . . . and many are desperate to take that freedom back.

Among them is a great dreamer, an immigrant who pulled himself from the depths of poverty to become one of the wealthiest and admired men in the world. That man is Andrew Ryan, and he believed that great men and women deserve better. And so he set out to create the impossible, a utopia free from government, censorship, and moral restrictions on science--where what you give is what you get. He created Rapture---the shining city below the sea.

But as we all know, this utopia suffered a great tragedy. This is the story of how it all came to be . . .and how it all ended.")

Book.create!(title: "In a Grove",
            author: "Ryunosuke Akutagawa",
            image_url: "http://i.imgur.com/TGfkxMr.jpg",
            publisher: "Kodansha",
            description: "'In a Grove' (藪の中, Yabu no Naka?) is a short story by Ryūnosuke Akutagawa, first appearing in the January 1922 edition of the Japanese literature monthly Shinchō. Akira Kurosawa used this story as the basis for his award-winning movie Rashōmon.

'In a Grove' is an early modernist short story consisting of seven varying accounts of the murder of a samurai, Kanazawa no Takehiro, whose corpse has been found in a bamboo forest near Kyoto. Each section simultaneously clarifies and obfuscates what the reader knows about the murder, eventually creating a complex and contradictory vision of events that brings into question humanity's ability or willingness to perceive and transmit objective truth.

The story is often praised as being among the greatest in Japanese literature.")

Book.create!(title: "A Game of Thrones",
            author: "George R.R. Martin",
            image_url: "http://i.imgur.com/aa0ocZw.jpg",
            publisher: "Bantam",
            description: "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun.

As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty.

The old gods have no power in the south, Stark’s family is split and there is treachery at court. Worse, the vengeance-mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities. He claims the Iron Throne.")

Bookshelf.destroy_all

Bookshelf.create!(name:"Fiction", user_id: User.find_by(username: "guest").id)
Bookshelf.create!(name:"Non-fiction", user_id: User.find_by(username: "guest").id)
Bookshelf.create!(name:"Fantasy", user_id: User.find_by(username: "guest").id)
Bookshelf.create!(name:"Science Fiction", user_id: User.find_by(username: "guest").id)
