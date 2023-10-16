import React, { useEffect, useRef, useState } from "react";
import sound from "../assets/audio/theme.mp3";
import { VscDebugRestart, VscMute, VscUnmute } from "react-icons/vsc";

const Welcome = () => {
  const audioRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    // console.log("1", audioRef.current);

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current && isAudioLoaded) {
      audioRef.current.pause();
      setIsAudioLoaded(false);
    } else {
      audioRef.current.play();
      setIsAudioLoaded(true);
    }
  };

  const reloadAudio = () => {
      audioRef.current.load();
      audioRef.current.play();
      setIsAudioLoaded(true);
  };

  return (
    <div className="welcome background-void">
      <div className="buttons-container background-void">
        <button className="btn-start">Start</button>
        <div className="audio-buttons background-void">
          <audio ref={audioRef}>
            <source src={sound} type="audio/mp3" />
          </audio>
          <button className="btn-audio" onClick={playAudio}>
            {isAudioLoaded ? <VscMute /> : <VscUnmute />}
          </button>
          <button className="btn-audio" onClick={reloadAudio}>
            <VscDebugRestart />
          </button>
        </div>
      </div>
      <div className="welcome-container background-void">
        <div className="wrapper background-void">
          <div className="scroll-text background-void">
            <div className="buttons-container">
            <h2>
            Young padawan,
            <br />
            Of all the galaxies out there, <br />
            The universe have brought you here. <br />
            There are far better planets to crash on but we welcome you
            nonetheless. <br />
            Welcome to The Ultimate Star Wars Quiz... planet! <br />
            Also known as: <br />
            'Nagashu-Basamba-Folkloro-Kishkashta'! <br />
            The Rules are quite simple... <br />
            Have you ever played inter-galactic Monopoly? <br />
            The board is quite huge, but the game is surprisingly short...{" "}
            <br />
            Maybe because we play it with our weapons loaded..? <br />
            Anyway, where was I..? <br />
            ...Who are you..? <br />
            ...What are you..? <br />
            ...What is the meaning of life..? <br />
            Oh! I remembered: <br />
            'Nagashu-Basamba-Folkloro-Kishkashta'! <br />
            Will you be able to recognize which episodes <br />
            The following scenes are from? <br />
            The answer will hide up above <br />
            (...while a hint can be found down below...) <br />
            Go get them, tiger! I mean... <br />
            May the forth be with you. Always. <br /> <br />
            Now, if you'll excuse me, <br />
            There's an important speech that I must give to my people. <br />
            They are yearning for it. <br />
            So you'll have to excuse me now. <br />
            Farewell, young padawn. Farewell...
            <br /> <br />
            My Dear People, <br />
            I come before you now with this ambitious revolutionary vision:{" "}
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente omnis ex aut molestiae quas harum corporis rem nesciunt?
            Soluta est dolor fuga perspiciatis illum, officia, vero quibusdam
            excepturi quia porro praesentium facilis tempore architecto
            voluptates in quis repellendus minus totam nostrum similique
            possimus! Quos, ut totam? In nulla cupiditate optio incidunt
            adipisci velit ea quia molestias molestiae necessitatibus, quos,
            aliquid, commodi officia. Maiores praesentium amet ipsum omnis,
            facere hic dicta. Soluta accusamus nisi obcaecati placeat, et
            eveniet iste maiores aspernatur omnis praesentium natus. Tempore
            necessitatibus magnam corrupti porro iure nemo eveniet asperiores.
            Fugiat, quis? Eaque, sapiente, necessitatibus facere aliquid nobis
            beatae voluptate provident rem veniam repudiandae impedit ab
            possimus. Sapiente placeat minima unde eos quidem iste ullam
            repellendus quae ipsum eius sit recusandae, magnam reprehenderit
            quia iure? Unde amet voluptatibus, magni earum, alias beatae
            repellendus nostrum voluptate dolorem reprehenderit repellat
            placeat, quae nobis quaerat accusamus. Maxime quae quia quasi odio
            reprehenderit quisquam, voluptatum qui dolores recusandae saepe?
            Reprehenderit tempore culpa vitae sint eligendi voluptates quia
            temporibus sed nemo nesciunt. Odit consequuntur cum sapiente nemo
            eos accusantium adipisci aliquam iure dignissimos, ullam animi,
            dolores reiciendis autem assumenda veritatis esse suscipit? Placeat
            ratione quas laudantium architecto dolores blanditiis eius,
            molestiae excepturi?
          </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

/*
 <body>
      <div class="buttons-container">
    <button class="btn-start">Start</button>
  </div>
      <div className="wrapper">
        <div className="scroll-text">
          <h2>
            Young padawan,
            <br />
            Of all the galaxies out there, <br />
            The universe have brought you here. <br />
            There are far better planets to crash on but we welcome you
            nonetheless. <br />
            Welcome to The Ultimate Star Wars Quiz planet! <br />
            Also known as: <br />
            'Nagashu-Basamba-Folkloro-Kishkashta'! <br />
            The Rules are quite simple... <br />
            Have you ever played inter-galactic Monopoly? <br />
            The board is quite huge, but the game is surprisingly short...{" "}
            <br />
            Maybe because we play it with our weapons loaded..? <br />
            Anyway, where was I..? <br />
            ...Who are you..? <br />
            ...What are you..? <br />
            ...What is the meaning of life..? <br />
            Oh! I remembered: <br />
            'Nagashu-Basamba-Folkloro-Kishkashta'! <br />
            Will you be able to recognize which episodes <br />
            The following scenes are from? <br />
            The answer will hide up above <br />
            (...while a hint can be found down below...) <br />
            Go get them, tiger! I mean... <br />
            May the forth be with you. Always. <br /> <br />
            Now, if you'll excuse me, <br />
            There's an important speech that I must give to my people. <br />
            They are yearning for it. <br />
            So you'll have to excuse me now. <br />
            Farewell, young padawn. Farewell...
            <br /> <br />
            My Dear People, <br />
            I come before you now with this ambitious revolutionary vision:{" "}
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente omnis ex aut molestiae quas harum corporis rem nesciunt?
            Soluta est dolor fuga perspiciatis illum, officia, vero quibusdam
            excepturi quia porro praesentium facilis tempore architecto
            voluptates in quis repellendus minus totam nostrum similique
            possimus! Quos, ut totam? In nulla cupiditate optio incidunt
            adipisci velit ea quia molestias molestiae necessitatibus, quos,
            aliquid, commodi officia. Maiores praesentium amet ipsum omnis,
            facere hic dicta. Soluta accusamus nisi obcaecati placeat, et
            eveniet iste maiores aspernatur omnis praesentium natus. Tempore
            necessitatibus magnam corrupti porro iure nemo eveniet asperiores.
            Fugiat, quis? Eaque, sapiente, necessitatibus facere aliquid nobis
            beatae voluptate provident rem veniam repudiandae impedit ab
            possimus. Sapiente placeat minima unde eos quidem iste ullam
            repellendus quae ipsum eius sit recusandae, magnam reprehenderit
            quia iure? Unde amet voluptatibus, magni earum, alias beatae
            repellendus nostrum voluptate dolorem reprehenderit repellat
            placeat, quae nobis quaerat accusamus. Maxime quae quia quasi odio
            reprehenderit quisquam, voluptatum qui dolores recusandae saepe?
            Reprehenderit tempore culpa vitae sint eligendi voluptates quia
            temporibus sed nemo nesciunt. Odit consequuntur cum sapiente nemo
            eos accusantium adipisci aliquam iure dignissimos, ullam animi,
            dolores reiciendis autem assumenda veritatis esse suscipit? Placeat
            ratione quas laudantium architecto dolores blanditiis eius,
            molestiae excepturi?
          </h2>
        </div>
      </div>
    </body>
*/
