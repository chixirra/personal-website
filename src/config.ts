export default {
  metadata: {
    title: 'chixirra',
    author: 'chixirra',
    description: 'my personal website :)',
    keywords: 'chixirra, chi, irra, chixi, chix, xirra, portfolio, website, chixirra.xyz',
    color: '#dc143c',
    url: 'https://chixirra.xyz',
    image: 'https://chixirra.xyz/meta.png',
    // this is the image that will be used for the og:image tag, i recommend to use a 1200x630 image
    // add this image in the public folder and use your site's domain linked to it like in the example
  },
  honorableMentions: [
    {
      title: 'my motivation',
      description:
        'this person :) <br /> i love her work and she is the reason i even made the site in the first place',
      picture: '/stars/shar.png', // your image should be in the "public" folder
      button: {
        text: 'her video',
        link: 'https://www.youtube.com/watch?v=_tWh4cYCTv0',
        icon: 'fa fa-youtube',
      },
    },
    {
      title: 'my cat',
      description: 'no questions asked. <a class="italic opacity-33">best car fr<a>',
      picture: '/stars/cat.png',
    },
    {
      title: 'my dogs',
      description: "who doesn't love dogs",
      picture: '/stars/dogs.png',
    },
  ], //false alarm, we're not using this i'll just hardcode them in

  customize: {
    showCredits: true, // show author credits at the bottom of the page - only if you want
    theme: 'crimson', // go to "./assets/theme.css" to view the themes, or create your own :)

    redirect: {
      delay: 800, // delay in milliseconds before redirecting to a page
    },
    headerWarning: {
      enabled: true,
      size: 5, // this is just padding size
      message: `for the time being im scrapping this site as I am not satisfied with it in the slightest, thank u for ur understanding`,
    }, // this is the message at the top of the page, you can use this to advertise that you are looking for a job or something like that, or you can disable it
    // i recommend using a longer name as it looks better but you can also just alter the code as you see fit
    // adding a <br> tag will make the name break into a new line
    // you can also add it at the beginning of the name to make it look better on the page if you plan on using a single name
    homePage: {
      displayName: 'chixirra',
      showProfilePicture: false, // the profile picture will disappear for small screens regardless of this setting
    },
    aboutMePage: {
      randomQuote: {
        enabled: true, // enable the random quote widget
      },
      biography: `- feel free to call me cristian :) <br />
            - I'm a 17-year-old Romanian high school
            student, learning UI/UX design
            <span class="italic opacity-33">i can't say this site is very good work in that regard</span>
            and programming.<br />
            - My interests lie in computers and digital content; gaming (Valorant, modded Minecraft,
            ghost of tsushima, and many other games...), photography, listening to music,
            rainy/foggy walks, nature at night, reading manga, watching anime, ocasionally drawing.
            <br />- I love animals, especially my pets
            <span class="italic opacity-33">check the star ;)</span><br />
            - i strive to constantly improve my abilities
            <span class="italic opacity-33">that's a lie, im lazy</span>`,
      // here you can customize the various messages on the about me page, for the widgets, please go in the "widgets" section of the configuration
      shortHistory: `I got into programming via Discord bots when i was 10, despite knowing nothing about
            it. I proudly made a simple bot using a lot of YouTube tutorials. Later, I learned
            coding through trial and error, trying to make projects way beyond my skill level (i’m
            sad to say i never saved them). From Discord bots, I moved on to building my own
            database system, learned basic HTML and CSS, and Minecraft servers too! I spent around
            3-4 years building Minecraft servers and even ran my own public server for a while,
            which actually earned me my first money online <span class="italic opacity-33">(yes i know it is not legal)</span>. After a break from all the gaming stuff, I
            learned JavaScript to build a personal API to help a community i was a part of at the
            time. <br> Watching dev logs inspired me to try game development, leading me to
            explore game art and music. While I didn't particularly do well in those areas, the
            learning process was very much enjoyable and rewarding to me, seeing my ideas come to
            life`,
      // i would recommend not keeping this very short because it will look weird on larger screens afterwards
    },
  },

  links: {
    repository: {
      address: 'https://github.com/chixirra/personal-website',
      text: '-',
      icon: '-', // get icons from https://fontawesome.com/
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
    // you may also redirect via: yoursite.com/redirect?to=<link> (replace <link> with your item name, eg. chixirra.xyz/redirect?to=https://google.com)
  },
}
