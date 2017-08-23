# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: &quot;Star Wars&quot; }, { name: &quot;Lord of the Rings&quot; }])
#   Character.create(name: &quot;Luke&quot;, movie: movies.first)

User.destroy_all

User.create!(username: "guest", password: "password")

Book.destroy_all

Book.create!(title: "Hitchhiker&quot;s Guide To The Galaxy",
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
            description: "Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time after he is abducted by aliens from the planet Tralfamadore. In a plot-scrambling display of virtuosity, we follow Pilgrim simultaneously through all phases of his life, concentrating on his (and Vonnegut&quot;s) shattering experience as an American prisoner of war who witnesses the firebombing of Dresden.

Don&quot;t let the ease of reading fool you - Vonnegut&quot;s isn&quot;t a conventional, or simple, novel. He writes, There are almost no characters in this story, and almost no dramatic confrontations, because most of the people in it are so sick, and so much the listless playthings of enormous forces. One of the main effects of war, after all, is that people are discouraged from being characters.

Slaughterhouse-Five is not only Vonnegut&quot;s most powerful book, it is also as important as any written since 1945. Like Catch- 22, it fashions the author&quot;s experiences in the Second World War into an eloquent and deeply funny plea against butchery in the service of authority. Slaughterhouse-Five boasts the same imagination, humanity, and gleeful appreciation of the absurd found in Vonnegut&quot;s other works, but the book&quot;s basis in rock-hard, tragic fact gives it a unique poignancy - and humor.")

Book.create!(title: "Ubik",
            author: "Philip K. Dick",
            image_url: "http://i.imgur.com/6Zeayhh.jpg",
            publisher: "Bantam Books",
            description: "Ubik is a 1969 science fiction novel by American writer Philip K. Dick. It is one of Dick&quot;s most acclaimed novels. It was chosen by Time magazine as one of the 100 greatest novels since 1923. In his review for Time, critic Lev Grossman described it as a deeply unsettling existential horror story, a nightmare you&quot;ll never be sure you&quot;ve woken up from.

The novel takes place in the North American Confederation of 1992, where civilians regularly travel to the Moon, and psi phenomena are common. The novel&quot;s protagonist, Joe Chip, is a debt-ridden technician for Glen Runciter&quot;s prudence organization, which employs people with the ability to block psychic powers (like an anti-telepath, preventing a telepath from reading a mind) to help enforce privacy. Runciter runs the company with the assistance of his deceased wife Ella, who is kept in a state of half-life, a form of cryonic suspension that gives the deceased limited consciousness and the ability to communicate.")
