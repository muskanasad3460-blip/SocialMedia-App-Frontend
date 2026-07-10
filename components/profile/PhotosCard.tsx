import React from "react";

export default function PhotosCard() {
  const photos = [
    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.99422-6/736448941_1022384460634278_7338274914845574095_n.png?stp=dst-jpg_tt6&cstp=mx2048x1143&ctp=s2048x1143&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4fd5iRo_STQQ7kNvwFnV8-7&_nc_oc=AdqyvT2KRk30nuQJgbECff0uLlW2enuzwC4DIhfGfUBVsLoNJUwLv8Wb11FXb31RD74&_nc_zt=14&_nc_ht=scontent.fskt2-1.fna&_nc_gid=wXoutq3SDD0FBSOO6dP6Uw&_nc_ss=7b2a8&oh=00_AQDKL-ViuupUIfCz-qzEL0_Ve4i2lNZ24rOZws1S3eWhLA&oe=6A527FD2",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.99422-6/728951168_876225075033658_6507075388107858582_n.png?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-Fbr1XlPT4gQ7kNvwFKVaar&_nc_oc=Adof_P-Q51bmJ3QbL8KybyPMK_uuqP-jcx1zF-qB_CjrgBIu_Z-q_cXiTjbaFWLWGaM&_nc_zt=14&_nc_ht=scontent.fskt2-1.fna&_nc_gid=X8OgsGzX1m64jDZRqVvNsA&_nc_ss=7b2a8&oh=00_AQBU0dHZsXH567V09XZ2EksEvC6J44zLp4QGdLA5daUYzw&oe=6A52933C",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/726349874_1559439735550549_5970808559969401658_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x768&ctp=s1024x768&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gxjmwqaT3DAQ7kNvwG1fbqP&_nc_oc=AdqrjbUX0rlvpPEQ5M388iZ61MTih0F2CPz7vLgwuVp3MQ1ZNsufbBJRMSSes6SPOBA&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=iF0MEWq3ule2bavFh5KHUg&_nc_ss=7b2a8&oh=00_AQAKAS9G7N-KCgp9EwyXkpina6mb7Y-AitbNUGTa5vetHA&oe=6A529824",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/727084013_1559439722217217_1507228254865206188_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x768&ctp=s1024x768&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8BQZ-M_JDQAQ7kNvwEaNMqV&_nc_oc=Adosa8nSbEzhpwmOyFaw-z3rcPMcmuU3at4UuHOcq5CIHstHTNNPCOp3CqHxkSLn7Eo&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=UjYQPshVJ_r-RfB-j8mOdQ&_nc_ss=7b2a8&oh=00_AQD9SlWoypfvLs1KXBFV200WroxX9Fy95Be786LTy2Ba0w&oe=6A529B31",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/725205991_1559439712217218_1355994578491181638_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x768&ctp=s1024x768&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pjce8OKTdOkQ7kNvwGMA8k2&_nc_oc=AdphJ5imJ89wi3BskfYo3RWTI9l6WVmO_kZ-va7UdCgFZRtU5r8pd2RQhRV8VoFsu-o&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=CMWV_5dCv0Eh_yJF8Mu8IA&_nc_ss=7b2a8&oh=00_AQDSHgg_o5Eu0ODo2_30-_rD0WIptJLuk993YC9skEs1nA&oe=6A5297EE",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/725120863_1559439668883889_4648104920500595311_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x768&ctp=s1024x768&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1YX_mMbZRPgQ7kNvwHDfLPD&_nc_oc=AdoORtiebDJjKfkF0ogdk7aEQfq6QJspgwv5YFXVnt0qazybGvpZPhE5Je8nXRcHYa4&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=-CCs1dqzi-pbqL0kdKx9jA&_nc_ss=7b2a8&oh=00_AQCjbo1fXSoZcjeJyYQuKlGJdC-kSHO3i_t8HdVXDzT4Mg&oe=6A529A50",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/726564775_1559439675550555_8244496526049263369_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JVybLSONkiQQ7kNvwFSsBE6&_nc_oc=Adp_sBW5wq5NksLHJsikSEutty0asPah0wht6VdgxJN5K5HH5NitF03UD5eKm0zUsJc&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=Kxn1vpSwqUjsfvyXP1qgKw&_nc_ss=7b2a8&oh=00_AQAOyn9_u-o2rn6da0Tl59-Y3paArMwzK1mtb2kiFUZelg&oe=6A528799",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/724958622_1558834485611074_4372910678149642159_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1066&ctp=s1600x1066&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-V9igKP48IUQ7kNvwEeeken&_nc_oc=Adof3_E32dfaHgSJsZUn8D90qIgIVO1R4c0R-o57VP8jt59AEnwtInyhqb6_by629MQ&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=hSe5RPSItBDiZ5KiR3Didg&_nc_ss=7b2a8&oh=00_AQAYSbTpDYyEirIB3WigHoNzpZI9DRPKyFQ_sNjwRPdZqg&oe=6A528B99",

    "https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/726891825_1558834478944408_6717673792333510570_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1066&ctp=s1600x1066&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LsCsQDYNmboQ7kNvwFZCZpn&_nc_oc=Adphj5a8xbtaLfMofZ75yAd9IdMmwUPZ_ikKE9Lf3TCHMnBx-ajKlgkKzI2F6QAxfjM&_nc_zt=23&_nc_ht=scontent.fskt2-1.fna&_nc_gid=w_yJEMlo7r2ydJBpZUmY1g&_nc_ss=7b2a8&oh=00_AQBS4Ol3HjLXIaZ_-ylmPnkYUPbsV1WoLuuARB62UN6Yjw&oe=6A5274A7",
  ];
  return (
    <div className="bg-white rounded-xl shadow p-5 mt-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Photos</h2>
        <a className="text-blue-600 text-xl cursor-pointer">See all photos</a>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`photo-${index}`}
            className="aspect-square object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
