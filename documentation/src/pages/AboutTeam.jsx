import { Github, Linkedin, Twitter } from "lucide-react"



export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Sree Gopal Saha",
      role: "MERN Stack Developer",
      bio: "Sree Gopal Saha is a passionate MERN Stack developer, embarking on his career in MERN Stack development with great enthusiasm. They founded WrapTalk after experiencing the pain of internationalization in large-scale applications.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGG79xYxGe2uQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694942905209?e=1749081600&v=beta&t=fc6NKP5anoeaI9B71HvDU6KxXJzZteEUlqTG7e42i3A",
      social: {
        github: "https://github.com/sreegopalsaha",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Md Yousuf Mallik",
      role: "MERN Stack Developer",
      bio: "Md Yousuf Mallik is a passionate MERN Stack developer, beginning his career in MERN Stack development with great enthusiasm. They founded WrapTalk after experiencing the pain of internationalization in large-scale applications.",
      image: "https://avatars.githubusercontent.com/u/170268567?v=4",
      social: {
        github: "https://github.com/Yousuf-cse",
        linkedin: "https://www.linkedin.com/in/yousuf-mallik-b88b14297/",
      },
    },
    {
      name: "Kartik Barman",
      role: "Software Engineer",
      bio: "Kartik Barman is a passionate software engineering enthusiast, eager to embark on his journey in the world of technology with dedication and curiosity",
      image: "https://avatars.githubusercontent.com/u/121763970?v=4",
      social: {
        github: "https://github.com/kartik-barman",
        linkedin: "https://www.linkedin.com/in/kartik-barman/",
      },
    },
    {
      name: "Sushanta Ruidas",
      role: "Backend Developer",
      bio: "Sushanta Ruidas is a passionate frontend developer, dedicated to crafting engaging and user-friendly web experiences with creativity and precision",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHLFceTKA2wuA/profile-displayphoto-shrink_200_200/B4EZXcXd0KHMAY-/0/1743158904646?e=1749081600&v=beta&t=oNypSrTX1WaKTBYmGmCiMsaVRgX36afdLKa4kIt7dXM",
      social: {
        github: "https://github.com/SushantaaCSE",
        linkedin: "https://www.linkedin.com/in/sushanta-ruidas/",
      },
    },
  ]

  return (
    <section id="about-team" className="py-20 bg-white dark:bg-gray-900 mt-4">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white cursor-default">About Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dev enthusiast individuals behind WrapTalk who are passionate about making multilingual support simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

