export default {
  metadata: {
    title: 'chixirra',
    author: 'chixirra',
    description: 'my personal website :)',
    keywords: 'chixirra, chi, irra, chixi, chix, xirra, portfolio, website, chixirra.xyz',
    color: '#4ae289',
    url: 'https://chixirra.xyz',
    image: 'https://chixirra.xyz/meta.png',
    // this is the image that will be used for the og:image tag, i recommend to use a 1200x630 image
    // add this image in the public folder and use your site's domain linked to it like in the example
  },
  customize: {
    // i recommend using a longer name as it looks better but you can also just alter the code as you see fit
    // adding a <br> tag will make the name break into a new line
    // you can also add it at the beginning of the name to make it look better on the page if you plan on using a single name
    homePageName: 'chixirra',
    showProfilePicture: false, // the profile picture will disappear for small screens regardless of this setting
    aboutMePage: {
      shortHistory: `   I got into programming via Discord bots when i was 10, despite knowing nothing about
            it. I proudly made a simple bot using a lot of YouTube tutorials. Later, I learned
            coding through trial and error, trying to make projects way beyond my skill level (i’m
            sad to say i never saved them). From Discord bots, I moved on to building my own
            database system, learned basic HTML and CSS, and Minecraft servers too! I spent around
            3-4 years building Minecraft servers and even ran my own public server for a while,
            which actually earned me my first money. After a break from all the gaming stuff, I
            learned JavaScript to build a personal API to help a community i was a part of at the
            time. <br> Watching dev logs inspired me to try game development, leading me to
            explore game art and music. While I didn't particularly do well in those areas, the
            learning process was very much enjoyable and rewarding to me, seeing my ideas come to
            life`,
    },
  },
  // api: {
  //   discord: {
  //     enabled: true, // enable showing discord status
  //     discordUserID: '123', // your discord user id
  //     discordGuildID: '123', // the server your bot is in to check the status of the provided user
  //   },
  //   spotify: {
  //     enabled: true, // enable showing spotify song
  //   },
  // },
  // get icons from https://fontawesome.com/
  links: {
    repository: {
      address: 'https://github.com/chixirra/personal-website',
      text: '-',
      icon: '-',
      hidden: true, // adding this (and setting it to true) basically means it won't be visible on the home page but it is still accessible
    },
    instagram: {
      address: 'https://instagram.com/chixirra',
      text: 'instagram',
      icon: 'fab fa-instagram',
    },
    spotify: {
      address: 'https://open.spotify.com/user/31fmsrvnw7adg7meshloffrvd2vi',
      text: 'instagram',
      icon: 'fab fa-spotify',
    },
    github: {
      address: 'https://github.com/chixirra',
      text: 'github',
      icon: 'fab fa-github',
    },
    twitter: {
      address: 'https://x.com/chixirra',
      text: 'twitter',
      icon: 'fab fa-twitter',
    },
    discord: {
      address: 'https://discord.com/users/798271665313546293',
      text: 'discord',
      icon: 'fab fa-discord',
    },
    twitch: {
      address: 'https://twitch.tv/chixirra',
      text: 'twitch',
      icon: 'fab fa-twitch',
    },
    // email: {
    //   address: 'mailto:contact' + '@example.com',
    //   text: 'email',
    //   icon: 'fas fa-envelope',
    //   hidden: false
    // },
    // use this if u want to redirect users to your email

    // each and every one of these links is accessible at yoursite.com/<link> (replace <link> with your item name, eg. chixirra.xyz/instagram)
  },
}
