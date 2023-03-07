import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"; 
import FrontLayout from "../layouts/Front";

const Home: NextPage = () => {
  return (
    <FrontLayout>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-1 p-3 md:py-[35]">
        <div className="space-y-2 md:space-y-6">
          <div className="card card-side bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/movie?w=200&h=280"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem ipsum dolor sit amet</h2>
              <div className="justify-start">
                <button className="btn btn-xs btn-primary">Movies</button>
                <button className="btn btn-xs btn-secondary">Watched</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="card card-side bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Fringilla est ullamcorper eget nulla facilisi etiam dignissim.
              </h2>
              <div className="justify-start">
                <button className="btn btn-xs btn-accent">Article</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim. Purus viverra accumsan in nisl.
                Aliquam faucibus purus in massa. In vitae turpis massa sed
                elementum tempus egestas. Nisl purus in mollis nunc sed.
                Ullamcorper morbi tincidunt ornare massa eget. Enim nulla
                aliquet porttitor lacus luctus accumsan. Id neque aliquam
                vestibulum morbi blandit cursus. Pellentesque eu tincidunt
                tortor aliquam nulla facilisi cras. Sed augue lacus viverra
                vitae.
              </p>
            </div>
          </div>
          <div className="card card-side bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/book?w=200&h=280"
                alt="Book"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rhoncus dolor purus non enim.</h2>
              <div className="justify-start">
                <button className="btn btn-xs btn-error">Books</button>
                <button className="btn btn-xs btn-success">Author</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim.
              </p>
            </div>
          </div>
          <div className="card card-side bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Elementum pulvinar etiam non quam lacus suspendisse
              </h2>
              <div className="justify-start">
                <button className="btn btn-xs btn-warning">Note</button>
              </div>
              <p>
                Sagittis id consectetur purus ut faucibus pulvinar elementum
                integer. Massa sed elementum tempus egestas sed. Proin sagittis
                nisl rhoncus mattis rhoncus urna. Amet volutpat consequat mauris
                nunc congue nisi vitae suscipit tellus. Posuere urna nec
                tincidunt praesent semper. Elementum pulvinar etiam non quam
                lacus suspendisse.
              </p>
            </div>
          </div>
          <div className="card card-side bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/game?w=200&h=280"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sed augue lacus viverra vitae.</h2>
              <div className="justify-start">
                <button className="btn btn-xs btn-primary">Game</button>
              </div>
              <p>
                Sodales ut etiam sit amet nisl purus in mollis nunc. Suspendisse
                potenti nullam ac tortor vitae purus. Eu mi bibendum neque
                egestas congue quisque egestas diam.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="btn-group">
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn btn-disabled">...</button>
              <button className="btn">99</button>
              <button className="btn">100</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <p className="text-xs pl-4">
          <a className="link" href="https://github.com/subashrijal5">
            Subash Rijal
          </a>
        </p>
      </div>
    </FrontLayout>
  );
};

export default Home;
