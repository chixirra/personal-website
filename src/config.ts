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
    homePageName: '<br>chixirra',
    showProfilePicture: true, // the profile picture will disappear for small screens regardless of this setting
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
      hidden: true, // this basically means it won't be visible on the home page but it is still accessible
    },
    instagram: {
      address: 'https://instagram.com/chixirra',
      text: 'instagram',
      icon: 'fab fa-instagram',
      hidden: false,
    },
    spotify: {
      address: 'https://open.spotify.com/user/31fmsrvnw7adg7meshloffrvd2vi',
      text: 'instagram',
      icon: 'fab fa-spotify',
      hidden: false,
    },
    github: {
      address: 'https://github.com/chixirra',
      text: 'github',
      icon: 'fab fa-github',
      hidden: false,
    },
    twitter: {
      address: 'https://x.com/chixirra',
      text: 'twitter',
      icon: 'fab fa-twitter',
      hidden: false,
    },
    discord: {
      address: 'https://discord.com/users/798271665313546293',
      text: 'discord',
      icon: 'fab fa-discord',
      hidden: false,
    },
    twitch: {
      address: 'https://twitch.tv/chixirra',
      text: 'twitch',
      icon: 'fab fa-twitch',
      hidden: false,
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
