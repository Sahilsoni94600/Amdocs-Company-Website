var linkNames = [
	"home", "software", "blog", "about"
]

var linkArray = [
	{
		name: "home",
		link: "/"
	},
	{
		name: "software",
		link: "/software"
	},
	{
		name: "blog",
		link: "/blog"
	},
	{
		name: "about",
		link: "/about"
	}
]

var bio = "My name is Sahil Soni. I am final year student of B.Tech CSE in Lovely Professional University. This is my company website which I have developed for my Node js Project."

var services = [
	{
		name: "Web Design",
		content: "From graphic design, to web development. From from small javascript applications, to enterprise Java. From branding to online media. Amdocs has you covered. We are a technology company who can help you create realizations of your ideas."
	},
	{
		name: "Software Development",
		content: "testing"
	},
]

var subtitle = "Full Stack Engineer"

var skills = [
	{
		language: "Java",
		level: "hundred"
	},
	{
		language: "HTML5",
		level: "hundred"
	},
	{
		language: "Node.JS",
		level: "hundred"
	},
	{
		language: "C/C++",
		level: "eighty"
	}
]

var clients = [
	{
		link:   "images/clients/bw.png",
		width:  104,
		height: 110
	},
	{
		link:   "images/clients/passnote.png",
		width:  303,
		height: 72
	},
	{
		link:   "images/clients/postdigital.png",
		width:  253,
		height: 39
	}
]

module.exports = {
	linkArray: linkArray,
	linkNames: linkNames,
	bio: bio,
	subtitle: subtitle,
	skills: skills,
	services: services,
	clients: clients
}