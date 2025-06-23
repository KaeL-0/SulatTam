type Article = {
  username: string;
  userProfileImageUrl: string;
  postDate: string | Date;
  title: string;
  slug?: string;
  about: string;
  content: string;
  favorites: number;
};

const articles: Article[] = [
    {
        username: 'Mikhael Edman P. Gomez',
        userProfileImageUrl: '/MikhaelGomez.jpg',
        postDate: new Date('2025-05-17T14:30:00Z'),
        title: 'How to build webapps that scale',
        about: `In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...`,
        content: `Web development has rapidly evolved, moving from jQuery-based DOM manipulation to advanced frameworks like AngularJS, alongside major improvements in browser performance. These changes have begun to significantly impact mobile development, a space previously dominated by native technologies due to poor performance of hybrid apps.
                    In the past, hybrid apps were criticized for being slow and clunky. However, new technologies like AngularJS and Ionic have changed the game, making it possible to build performant, visually appealing, and fast mobile apps using web technologies. Ionic, developed by Drifty, bridges AngularJS with mobile UI components, providing functionality similar to native platforms like iOS's UIKit or Android's UI system.
                    The course introduces Ionic and Cordova (the open-source core of Adobe's PhoneGap) and teaches how to build cross-platform mobile apps. The featured project is Songhop, a real-world "Tinder for music" app built in just a month using Ionic and Cordova.`,
        favorites: 29
    },
    {
        username: 'Mikhael Edman P. Gomez',
        userProfileImageUrl: '/MikhaelGomez.jpg',
        postDate: new Date('2025-04-25T09:00:00Z'),
        title: 'My First Blog Post!',
        about: `In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat, nunc a luctus vehicula, libero quam sodales lorem, sed bibendum nulla neque eget diam. Maecenas et nisi sed arcu fermentum pretium in id sapien. Vivamus lobortis ipsum non turpis volutpat, id feugiat nulla porttitor. Nulla facilisi. Quisque ac turpis sed velit ultrices vestibulum sed at erat. Donec tristique sem eget metus imperdiet, in aliquam ligula luctus.
                    Sed dignissim dapibus felis, a tincidunt neque lobortis sed. Vestibulum varius arcu ac posuere tincidunt. Duis in suscipit elit. Ut sagittis sodales augue, sit amet dapibus leo laoreet ut. Aenean ullamcorper, orci nec volutpat laoreet, erat tortor rutrum lacus, nec posuere lorem velit ac risus. In in tortor ut erat laoreet sodales nec sit amet leo. Quisque id arcu eu justo lacinia rutrum. Fusce condimentum sapien nec risus pretium laoreet. Donec ut sem id libero ultrices congue. Aliquam erat volutpat.
                    Integer lobortis ligula at felis euismod tincidunt. Pellentesque malesuada laoreet nisl, at rhoncus sapien. Sed dignissim sem nec massa dictum, vel efficitur risus rhoncus. Aliquam erat volutpat. In nec dui lacinia, sodales enim at, sagittis ex. Integer nec tortor vitae nulla dapibus cursus. Sed id neque risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pulvinar, libero sed laoreet imperdiet, nisl justo pretium ante, ac lacinia risus felis in leo.`,
        favorites: 0
    }
]

export default articles
export type { Article }