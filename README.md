# fanelenan7.github.io
### About
New personal website (2018)

Created with React. Initially started with Create React App, then ejected to modify the setup, specifically for adding Sass.
I'm a firm believer that we as developers should make our lives easier by leveraging CSS whenever possible (that simple yet sublime thing was taught to me by my former director of development, the amazing [Chris Casciano](https://github.com/placenamehere)).

In case you were interested in the work I did, unfortunately my current github repo is not very representative of my current skills, since all the work I've done for Mariana Tek in my previous position is locked away in a private repository. But I you can view aspects of the work I've done in the booking and purchasing systems of [Barry's Bootcamp](https://barrysbootcamp.com), [Brrrn](https://thebrrrn.com), [Biker Barre](https://bikerbarre.com) and [SculptHouse](https://sculpthouse.com).

You can also check out [Releaf App](https://releafapp.com/) in [App Store](https://itunes.apple.com/us/app/releaf-thoughtful-approach/id1108402819) and [Google Play Store](https://play.google.com/store/apps/details?id=com.releafapp.releaf) (or whatever it's called these days?).

### Setup

Clone the repository. Then run:
```
yarn
yarn start
```

### Deployment

Since it's a user page, it's deployed from the master branch. Run `yarn build`, which will create a production build and push it up on a `gh-pages` branch. That would be fine for a project, but again, since it's a user page url, things are a bit more complicated. You'll have to `git fetch` to get the prod build from the repo, then `git checkout gh-pages`. Then, to avoid unnecessary conflicts, `git branch -d master` to remove old master branch and `git checkout -b master` from the `gh-pages` branch.

That would create a new `master` branch with the production build, all that's left is `git push --set-upstream origin master --force` to override the old build.
