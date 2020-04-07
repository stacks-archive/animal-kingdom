import { AppConfig, UserSession } from 'blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data']);
export const authOptions = {
  redirect: '/',
  appDetails: {
    name: 'Animal Kingdom',
    icon: 'https://animalkingdoms.netlify.com/icon-192x192.png',
  },
  finished: () => {
    window.location.href = '/';
  },
  userSession: new UserSession(appConfig),
};
export const ANIMALS = [
  {
    id: 'cat',
    name: 'Cat',
    superpower: 'Has 9 lives.',
  },
  {
    id: 'dog',
    name: 'Dog',
    superpower: 'Catching frisbees.',
  },
  {
    id: 'lion',
    name: 'Lion',
    superpower: 'Roaring loudly.',
  },
];

export const TERRITORIES = [
  {
    id: 'forest',
    name: 'Forest',
    superpower: 'Trees!',
  },
  {
    id: 'tundra',
    name: 'Tundra',
    superpower: 'Let it snow!',
  },
];

export const ME_FILENAME = 'me.json';
export const SUBJECTS_FILENAME = 'subjects.json';
export const EXPLORER_URL = 'https://explorer.blockstack.org';

export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id',
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id',
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id',
  },
  {
    app: 'https://thirsty-jang-0c0a17.netlify.com',
    ruler: 'ma1222042.id.blockstack',
  },
  {
    app: 'https://elastic-yalow-5d7c5a.netlify.com',
    ruler: 'kkomaz.id',
  },
  {
    app: 'https://valsanimalkingdom.netlify.com',
    ruler: 'valentin.blockstack.id',
  },
  {
    app: 'https://dazzling-mclean-3dd6e2.netlify.com',
    ruler: 'salil_gtm.id.blockstack',
  },
  {
    app: 'https://optimistic-kepler-bb37b2.netlify.com',
    ruler: 'sagarchoudhary96.id.blockstack',
  },
  {
    app: 'https://mystifying-bardeen-983642.netlify.com',
    ruler: 'rattle99.id.blockstack',
  },
  {
    app: 'https://stoic-leavitt-d86356.netlify.com',
    ruler: 'azizahmed.id.blockstack',
  },
  {
    app: 'https://frosty-leakey-8a24d2.netlify.com',
    ruler: 'superbadpeter.id.blockstack',
  },
  {
    app: 'https://gallant-sinoussi-734e73.netlify.com',
    ruler: 'ginxh.id.blockstack',
  },
  {
    app: 'https://trusting-haibt-e87237.netlify.com',
    ruler: 'charlied.id.blockstack',
  },
  {
    app: 'https://dazzling-ptolemy-1e1411.netlify.com',
    ruler: 'fivebyfive.id.blockstack',
  },
  {
    app: 'https://planet.friedger.de',
    ruler: 'friedger.id',
  },
  {
    app: 'https://animal-kingdom.djnicholson.com',
    ruler: 'djnicholson.id.blockstack',
  },
  {
    app: 'https://vigilant-goldberg-43a99e.netlify.com',
    ruler: 'samuelescarigo.id.blockstack',
  },
  {
    app: 'https://condescending-wright-e66128.netlify.com',
    ruler: 'lindseywoo.id.blockstack',
  },
  {
    app: 'https://trusting-stonebraker-af1ebc.netlify.com',
    ruler: 'ngerald51.id.blockstack',
  },
  {
    app: 'https://stoic-williams-909dc6.netlify.com',
    ruler: 'kimsk112.id.blockstack',
  },
  {
    app: 'https://elastic-dijkstra-9f34ef.netlify.com',
    ruler: 'csilverman.id.blockstack',
  },
  {
    app: 'https://angry-jepsen-50bb19.netlify.com',
    ruler: 'sandyhoover.id',
  },
  {
    app: 'https://hopeful-meninsky-92fa7f.netlify.com',
    ruler: 'quiottscuinn.id.blockstack',
  },
  {
    app: 'https://cranky-spence-eef5f8.netlify.com',
    ruler: 'fehrnstr.id.blockstack',
  },
  {
    app: 'https://focused-roentgen-9b4d74.netlify.com',
    ruler: 'jorishermans.id.blockstack',
  },
  {
    app: 'https://reverent-pasteur-a4900c.netlify.com',
    ruler: 'dubiousdog.id.blockstack',
  },
  {
    app: 'https://zealous-villani-bb5378.netlify.com',
    ruler: 'jstrnbrg.id.blockstack',
  },
  {
    app: 'https://zealous-cray-e48eb6.netlify.com',
    ruler: 'trappier.id.blockstack',
  },
  {
    app: 'https://animalkingdom5th.netlify.com',
    ruler: '5thdimension.id.blockstack',
  },
  {
    app: 'https://distracted-saha-09847b.netlify.com',
    ruler: 'anthony_albertorio.id.blockstack',
  },
  {
    app: 'https://modest-wescoff-dc0756.netlify.com',
    ruler: 'pantherapardus.id.blockstack',
  },
  {
    app: 'https://romantic-perlman-5483a9.netlify.com',
    ruler: 'gopye.id.blockstack',
  },
  {
    app: 'flamboyant-galileo-7f43b3.netlify.com',
    ruler: 'livpayawal.id.blockstack',
  },
  {
    app: 'https://modest-wescoff-dc0756.netlify.com',
    ruler: 'pantherapardus.id.blockstack',
  },
  {
    app: 'https://upbeat-williams-577db4.netlify.com',
    ruler: 'wowbagger59.id.blockstack',
  },
  {
    app: 'https://animal-kingdom-lh.netlify.com',
    ruler: 'latenthero.id.blockstack',
  },
  {
    app: 'https://confident-northcutt-143b95.netlify.com',
    ruler: 'natthecat.id.blockstack',
  },
  {
    app: 'https://amazing-austin-21f33f.netlify.com',
    ruler: 'chodethedryasic.id.blockstack',
  },
  {
    app: 'https://sharp-jones-174451.netlify.com',
    ruler: 'Jameshawkinsiii.id',
  },
  {
    app: 'https://modest-chandrasekhar-0e9f62.netlify.com',
    ruler: 'ID-1MhuTmakatYQR9tUF2ThtQ9woeCY92eWks',
  },
  {
    app: 'https://adoring-yalow-cca026.netlify.com',
    ruler: 'edhenderson.id.blockstack',
  },
  {
    app: 'https://hopeful-lamport-75d72a.netlify.com',
    ruler: 'bradyisom.id.blockstack',
  },
  {
    app: 'https://world-needs-animals.netlify.com',
    ruler: 'renegmed.id.blockstack',
  },
  {
    app: 'https://hopeful-mcclintock-559a85.netlify.com',
    ruler: 'bartonij.id.blockstack',
  },
  {
    app: 'https://friendly-goldwasser-192893.netlify.com',
    ruler: 'lbglaves.id.blockstack',
  },
  {
    app: 'https://silly-easley-34c111.netlify.com',
    ruler: 'nasireqbal.id.blockstack',
  },
  {
    app: 'https://optimistic-wing-7a17ab.netlify.com',
    ruler: 'jamersden.id.blockstack',
  },
  {
    app: 'https://zen-yonath-540268.netlify.com',
    ruler: 'olletsoc.id',
  },
  {
    app: 'https://quirky-booth-4cee6d.netlify.com',
    ruler: 'vykuntavasu.id.blockstack',
  },
  {
    app: 'https://confident-borg-21283f.netlify.com',
    ruler: 'jazken.id.blockstack',
  },
  {
    app: 'https://flamboyant-beaver-c71164.netlify.com',
    ruler: 'diego_angelino.id.blockstack',
  },
  {
    app: 'https://trusting-kirch-492433.netlify.com',
    ruler: 'rmarchese.id.blockstack',
  },
  {
    app: 'https://pensive-tereshkova-29c564.netlify.com',
    ruler: 'nicon00b.id.blockstack',
  },
  {
    app: 'https://blissful-hodgkin-6062b1.netlify.com',
    ruler: 'ottoman91.id.blockstack',
  },
  {
    app: 'https://relaxed-ptolemy-1e8668.netlify.com',
    ruler: 'beeccc12.id.blockstack',
  },
  {
    app: 'https://cranky-bohr-e74e2c.netlify.com',
    ruler: 'jas_blockstack.id.blockstack',
  },
  {
    app: 'https://epic-kirch-0d81b5.netlify.com',
    ruler: 'rickevans.id.blockstack',
  },
  {
    app: 'https://sharp-leavitt-9ea1d4.netlify.com',
    ruler: 'yashvadhvani.id.blockstack',
  },
  {
    app: 'https://eloquent-shockley-791c49.netlify.com',
    ruler: 'nate1010.id.blockstack',
  },
  {
    app: 'https://focused-keller-6ed5ac.netlify.com',
    ruler: 'blockstalker.id.blockstack',
  },
  {
    app: 'https://blissful-poitras-112429.netlify.com',
    ruler: 'mhmodtayel.id.blockstack',
  },
  {
    app: 'https://jovial-almeida-f5569d.netlify.com',
    ruler: 'codeamt11.id.blockstack',
  },
  {
    app: 'https://adoring-hamilton-e4d10d.netlify.com',
    ruler: 'brian501.id.blockstack',
  },
  {
    app: 'https://naughty-bhaskara-17b05c.netlify.com',
    ruler: 'kkcheng.id.blockstack',
  },
  {
    app: 'https://musing-joliot-453693.netlify.com',
    ruler: 'phallvance.id.blockstack',
  },
  {
    app: 'https://quirky-bassi-182eff.netlify.com',
    ruler: 'ankianan.id.blockstack',
  },
  {
    app: 'https://practical-stallman-b41995.netlify.com',
    ruler: 'watson_anirudh.id.blockstack',
  },
  {
    app: 'https://affectionate-jang-749b1b.netlify.com',
    ruler: 'miura0319.id.blockstack',
  },
  {
    app: 'https://gallant-volhard-0ab9bf.netlify.com',
    ruler: 'betosmith2000.id.blockstack',
  },
  {
    app: 'https://stoic-hawking-dd2218.netlify.com',
    ruler: 'sancho_panza.id.blockstack',
  },
  {
    app: 'https://zealous-nightingale-8d6b51.netlify.com',
    ruler: 'anugrahsinghal.id.blockstack',
  },
  {
    app: 'https://brave-agnesi-fc7d2b.netlify.com',
    ruler: 'alexsopinka.id.blockstack',
  },
  {
    app: 'https://zen-poincare-743126.netlify.com',
    ruler: 'dartman100.id.blockstack',
  },
  {
    app: 'https://hopeful-noether-0883fc.netlify.com',
    ruler: 'rajathav.id.blockstack',
  },
  {
    app: 'Uhttps://pre-kingdom-336989.netlify.com',
    ruler: 'pschhikara88.id.blockstack',
  },
  {
    app: 'https://eloquent-kepler-13171c.netlify.com',
    ruler: 'camperal.id.blockstack',
  },
  {
    app: 'https://gracious-elion-08d8b6.netlify.com',
    ruler: 'takatthokinawa.id.blockstack',
  },
  {
    app: 'emptywells.id.blockstack',
    ruler: 'emptywells.id.blockstack',
  },
  {
    app: 'https://upbeat-mccarthy-43697d.netlify.com',
    ruler: 'seancasey.id.blockstack',
  },
  {
    app: 'https://my1stblckapp.netlify.com',
    ruler: 'ahmadreza.id.blockstack',
  },
  {
    app: 'https://reverent-newton-f66a3f.netlify.com',
    ruler: 'manank9595.id.blockstack',
  },
  {
    app: 'https://hopeful-kirch-f5a0ce.netlify.com',
    ruler: 'jerryjerrygood.id.blockstack',
  },
  {
    app: 'https://wizardly-roentgen-791914.netlify.com',
    ruler: 'safe_ware.id.blockstack',
  },
  {
    app: 'https://quirky-mcnulty-bc977b.netlify.com',
    ruler: 'devil1331.id.blockstack',
  },
  {
    app: 'https://mystifying-tesla-0fc17a.netlify.com',
    ruler: 'acidleroy.id.blockstack',
  },
  {
    app: 'https://keen-fermi-c1e5f3.netlify.com',
    ruler: 'nobkovskii.id.blockstack',
  },
  {
    app: 'https://wizardly-roentgen-791914.netlify.com',
    ruler: 'safe_ware.id.blockstack',
  },
  {
    app: 'https://mystifying-hugle-0685a9.netlify.com',
    ruler: 'sarakawa626.id.blockstack',
  },
  {
    app: 'https://hungry-wiles-ddb112.netlify.com',
    ruler: 'ryokomy3.id.blockstack',
  },
  {
    app: 'Uhttps://boring-borg-980465.netlify.com',
    ruler: 'kakke18_perry.id.blockstack',
  },
  {
    app: 'https://wonderful-benz-f442d5.netlify.com',
    ruler: 'arandoros.id.blockstack',
  },
  {
    app: 'https://cocky-spence-96f8bc.netlify.com',
    ruler: 'wildmolasses.id.blockstack',
  },
  {
    app: 'https://hopeful-kirch-f5a0ce.netlify.com',
    ruler: 'jerryjerrygood.id.blockstack',
  },
  {
    app: 'https://nervous-bardeen-84fa52.netlify.com',
    ruler: 'maozedong.id.blockstack',
  },
  {
    app: 'https://gallant-lewin-0565e3.netlify.com',
    ruler: 'petersmurphy7.id.blockstack',
  },
  {
    app: 'https://determined-mayer-5da20c.netlify.com',
    ruler: 'dames.id.blockstack',
  },
  {
    app: 'https://unruffled-jennings-f51797.netlify.com',
    ruler: 'goashleysu.id.blockstack',
  },
  {
    app: 'https://mystifying-montalcini-5975b6.netlify.com',
    ruler: 'octavian.id.blockstack',
  },
  {
    app: 'https://silly-joliot-e3dbed.netlify.com',
    ruler: 'thinkverse.id.blockstack',
  },
  {
    app: 'https://xenodochial-perlman-eda622.netlify.com',
    ruler: 'dipsyChan.id',
  },
  {
    app: 'https://heuristic-villani-a61306.netlify.com',
    ruler: 'leizlsamano.id.blockstack',
  },
  {
    app: 'https://jovial-boyd-7f5f10.netlify.com',
    ruler: 'omgitsgod.id.blockstack',
  },
  {
    app: 'https://naughty-williams-f3fae0.netlify.com',
    ruler: 'aspampinato.id.blockstack',
  },
  {
    app: 'https://awesome-allen-b964c2.netlify.com',
    ruler: 'umairisrar.id.blockstack',
  },
  {
    app: 'https://animalskingdoms.netlify.com',
    ruler: 'robertchendev.id.blockstack',
  },
  {
    app: 'https://naughty-euclid-5ef4db.netlify.com',
    ruler: 'jefreybulla.id.blockstack',
  },
  {
    app: 'https://practical-wozniak-8d76bd.netlify.com',
    ruler: 'georgety.id.blockstack',
  },
  {
    app: 'https://eager-snyder-3ee638.netlify.com',
    ruler: 'saigedruid.id.blockstack',
  },
  {
    app: 'https://pensive-swirles-b2da89.netlify.com',
    ruler: 'botagranate.id.blockstack',
  },
  {
    app: 'https://angry-murdock-a2700c.netlify.com',
    ruler: 'jayankamdar.id.blockstack',
  },
  {
    app: 'https://wonderful-noyce-e06ea4.netlify.com',
    ruler: 'samrajmoorjani.id.blockstack',
  },
  {
    app: 'https://hopeful-blackwell-a3f249.netlify.com',
    ruler: 'eselbeus.id.blockstack',
  },
  {
    app: 'https://sn-animal-kingdom.netlify.com',
    ruler: 'snmediaworks.id.blockstack',
  },
  {
    app: 'https://animal-kingdom.netlify.com',
    ruler: 'yasirahk.id.blockstack',
  },
  {
    app: 'https://elegant-mestorf-759375.netlify.com',
    ruler: 'danparamo.id.blockstack',
  },
  {
    app: 'https://stupefied-shannon-286386.netlify.com',
    ruler: 'meteorologisk.id.blockstack',
  },
  {
    app: 'https://laughing-goldstine-172136.netlify.com',
    ruler: 'wiljagocook.id.blockstack',
  },
  {
    app: 'https://youthful-snyder-19f045.netlify.com',
    ruler: 'gitanshu.id.blockstack',
  },
  {
    app: 'https://cocky-heyrovsky-d586ee.netlify.com',
    ruler: 'gunillaz.id.blockstack',
  },
  {
    app: 'https://stoic-raman-89864e.netlify.com',
    ruler: 'adrianda.id.blockstack',
  },
  {
    app: 'https://musing-allen-c4cbd0.netlify.com',
    ruler: 'dinolaur.id.blockstack',
  },
  {
    app: 'https://eager-goodall-d3f5e2.netlify.com',
    ruler: 'davina2019.id.blockstack',
  },
  {
    app: 'https://festive-benz-709427.netlify.com',
    ruler: 'superkaa.id.blockstack',
  },
  {
    app: 'https://priceless-noyce-5b2a91.netlify.com',
    ruler: 'nicsmith.id.blockstack',
  },
  {
    app: 'https://raquels-animal-kingdom.netlify.com',
    ruler: 'saekit808.id.blockstack',
  },
  {
    app: 'https://epic-yalow-f35449.netlify.com',
    ruler: 'vrajeshkanna.id.blockstack',
  },
  {
    app: 'https://thirsty-kepler-7d0fbe.netlify.com',
    ruler: 'andrewttran.id.blockstack',
  },
  {
    app: 'https://affectionate-kilby-515d7c.netlify.com',
    ruler: 'silveroy.id.blockstack',
  },
  {
    app: 'https://heuristic-franklin-f1ad06.netlify.com',
    ruler: 'khaleddell.id.blockstack',
  },
  {
    app: 'https://eager-boyd-c9beb0.netlify.com',
    ruler: 'kelceywilson.id.blockstack',
  },
  {
    app: 'https://elated-tereshkova-5fecd7.netlify.com',
    ruler: 'jsimon98',
  },
  {
    app: 'https://elastic-pike-f6a886.netlify.com',
    ruler: 'amqzong1.id.blockstack',
  },
  {
    app: 'https://cocky-montalcini-e9b713.netlify.com',
    ruler: 'srinivasan.id.blockstack',
  },
  {
    app: 'https://tender-darwin-76d1ac.netlify.com',
    ruler: 'ctxzzzzz.id.blockstack',
  },
  {
    app: 'https://pensive-raman-fd2bbf.netlify.com',
    ruler: 'coyotenxs.id.blockstack',
  },
  {
    app: 'https://inspiring-goldwasser-7a68cd.netlify.com',
    ruler: 'transistor.id.blockstack',
  },
  {
    app: 'https://determined-hoover-e3a87a.netlify.com',
    ruler: 'daveharry.id.blockstack',
  },
  {
    app: 'https://priceless-wilson-8e57b1.netlify.com',
    ruler: 'michaelw.id.blockstack',
  },
  {
    app: 'https://awesome-goldberg-dfb7f2.netlify.com',
    ruler: 'acecauis.id.blockstack',
  },
  {
    app: 'https://practical-fermat-f46a63.netlify.com',
    ruler: 'emilsergiev.id.blockstack',
  },
  {
    app: 'https://gallant-feynman-7d2107.netlify.com',
    ruler: 'jnermano.id.blockstack',
  },
  {
    app: 'https://confident-curran-bc4f99.netlify.com',
    ruler: 'andrewtruex.id.blockstack',
  },
  {
    app: 'https://musing-jennings-9a8c76.netlify.com',
    ruler: 'voiceappstudio.id.blockstack',
  },
  {
    app: 'https://eager-galileo-36deaa.netlify.com',
    ruler: 'mlambo2019.id.blockstack',
  },
  {
    app: 'https://compassionate-heyrovsky-c539c0.netlify.com',
    ruler: 'hongily25.id.blockstack',
  },
  {
    app: 'https://sad-albattani-b59b7a.netlify.com',
    ruler: 'jonathanerlich.id.blockstack',
  },
  {
    app: 'https://suspicious-heisenberg-ef115b.netlify.com',
    ruler: 'lorenzob.id.blockstack',
  },
  {
    app: 'https://epic-murdock-ed407f.netlify.com',
    ruler: 'wilfred8.id.blockstack',
  },
  {
    app: 'https://quizzical-hamilton-c15107.netlify.com',
    ruler: 'eamongwalsh.id',
  },
  {
    app: 'https://brave-torvalds-530c16.netlify.com',
    ruler: 'jedsada_tiwongvorakul.id.blockstack',
  },
  {
    app: 'https://infallible-goodall-e2a786.netlify.com',
    ruler: 'rajathav.id.blockstack',
  },
  {
    app: 'https://pensive-fermat-b94acf.netlify.com',
    ruler: 'sujeethav02.id.blockstack',
  },
  {
    app: 'https://competent-ramanujan-21dc0b.netlify.com',
    ruler: 'juancabello.id.blockstack',
  },
  {
    app: 'https://xenodochial-goldberg-1bc549.netlify.com',
    ruler: 'ctrlaltdileep.id.blockstack',
  },
  {
    app: 'https://sharp-fermi-ec89a5.netlify.com',
    ruler: 'josegabriel.id.blockstack',
  },
  {
    app: 'https://nervous-nightingale-8054b6.netlify.com',
    ruler: 'iswistore.id.blockstack',
  },
  {
    app: 'https://practical-joliot-6c77e0.netlify.com',
    ruler: 'robertwilliamallen.id',
  },
  {
    app: 'https://rorysanimalkingdoms.netlify.com',
    ruler: 'rorychristianmurray.id.blockstack',
  },
  {
    app: 'https://modest-yalow-9aa5aa.netlify.com',
    ruler: 'greyingraven.id.blockstack',
  },
  {
    app: 'https://goofy-fermi-447c0b.netlify.com',
    ruler: 'discover.id.blockstack',
  },
  {
    app: 'https://kind-hermann-d712d6.netlify.com',
    ruler: 'hatskier.id.blockstack',
  },
  {
    app: 'https://trusting-mcnulty-014bea.netlify.com',
    ruler: 'georgiokg10.id.blockstack',
  },
  {
    app: 'https://romantic-wright-331655.netlify.com',
    ruler: 'chrisigbojekwe.id.blockstack',
  },
  {
    app: 'https://festive-minsky-399ea0.netlify.com',
    ruler: 'briancottrell.id.blockstack',
  },
  {
    app: 'https://suspicious-shockley-b6d288.netlify.com',
    ruler: 'danosaur98.id.blockstack',
  },
  {
    app: 'https://agitated-meitner-876cf1.netlify.com',
    ruler: 'tinkerbell.id.blockstack',
  },
  {
    app: 'https://sad-wilson-2f844e.netlify.com',
    ruler: 'slamtrade.id.blockstack',
  },
  {
    app: 'https://inspiring-minsky-09ac2d.netlify.com',
    ruler: 'xbiospace1.id.blockstack',
  },
  {
    app: 'https://dreamy-noether-0952b6.netlify.com',
    ruler: '0xxx99xxx0.id.blockstack',
  },
  {
    app: 'https://titania.netlify.com',
    ruler: 'runefar1.id.blockstack',
  },
  {
    app: 'https://focused-engelbart-811df4.netlify.com',
    ruler: 'siracharr.id.blockstack',
  },
  {
    app: 'https://fervent-lovelace-879be0.netlify.com',
    ruler: 'edhp4n1k.id.blockstack',
  },
  {
    app: 'https://peaceful-brahmagupta-de4632.netlify.com',
    ruler: 'devstack.id.blockstack',
  },
  {
    app: 'https://vibrant-mestorf-c07df8.netlify.com',
    ruler: 'scalish.id.blockstack',
  },
  {
    app: 'https://sad-golick-7cf29e.netlify.com',
    ruler: 'davidshq.id.blockstack',
  },
  {
    app: 'https://sad-bhabha-656055.netlify.com',
    ruler: 'otterthedog.id.blockstack',
  },
  {
    app: 'https://elegant-ardinghelli-75ae9a.netlify.com',
    ruler: 'andrasfeher.id.blockstack',
  },
  {
    app: 'https://laughing-heisenberg-a87a8f.netlify.com',
    ruler: 'volucris.id.blockstackDOFUSER',
  },
  {
    app: 'https://confident-colden-2a5eb4.netlify.com',
    ruler: 'shanekmoore.id.blockstack',
  },
  {
    app: 'https://gifted-elion-8ce162.netlify.com',
    ruler: 'bakingpi_blockstack.id.blockstack',
  },
  {
    app: 'https://zealous-mclean-75304f.netlify.com',
    ruler: 'trevorclohessy.id.blockstack',
  },
  {
    app: 'https://compassionate-fermat-7b0a0b.netlify.com',
    ruler: 'abedrapo.id.blockstack',
  },
  {
    app: 'https://compassionate-fermat-7b0a0b.netlify.com',
    ruler: 'eabedrapo.id.blockstack',
  },
  {
    app: 'https://inspiring-swartz-b34c0e.netlify.com',
    ruler: 'samrobbins.id.blockstack',
  },
  {
    app: 'https://hungry-brown-7cce75.netlify.com',
    ruler: 'abdulmuqeeth.id.blockstack',
  },
  {
    app: 'https://dreamy-edison-0a9b55.netlify.com',
    ruler: 'kingbodhi.id.blockstack',
  },
  {
    app: 'https://modest-dijkstra-a9343c.netlify.com',
    ruler: 'oneloves.id.blockstack',
  },
  {
    app: 'https://quirky-chandrasekhar-0a34ee.netlify.com',
    ruler: 'dappcoder.id.blockstack',
  },
  {
    app: 'https://docky-meninsky-b5f573.netlify.com',
    ruler: 'psgganesh.id.blockstack',
  },
  {
    app: 'https://priceless-bhabha-3d5777.netlify.com',
    ruler: 'smsunarto.id.blockstack',
  },
  {
    app: 'https://tender-yalow-e16b4d.netlify.com',
    ruler: 'gnewfield.id.blockstack',
  },
  {
    app: 'https://upbeat-cray-a4b75b.netlify.com',
    ruler: 'kookajamo.id.blockstack',
  },
  {
    app: 'https://nostalgic-darwin-f50fab.netlify.com',
    ruler: 'varalawraga.id.blockstack',
  },
  {
    app: 'https://silly-clarke-a3f96f.netlify.com',
    ruler: 'ddorman.id',
  },
  {
    app: 'https://quirky-meitner-22ea5a.netlify.com',
    ruler: 'praepunctis.id.blockstack',
  },
  {
    app: 'https://festive-goldstine-7168c0.netlify.com',
    ruler: 'aceparis32.id.blockstack',
  },
  {
    app: 'https://competent-clarke-7f7d25.netlify.com',
    ruler: 'aaron_avatm.id.blockstack',
  },
  {
    app: 'https://sleepy-chandrasekhar-f3beb4.netlify.com',
    ruler: 'davidjegan.id.blockstack',
  },
  {
    app: 'https://pokemonkingdom.armujahid.me',
    ruler: 'armujahid.id.blockstack',
  },
  {
    app: 'https://brave-wilson-8b6dc3.netlify.com',
    ruler: 'alexjhyu.id.blockstack',
  },
  {
    app: 'https://angry-jennings-ec278d.netlify.com',
    ruler: 'cardboard.id.blockstack',
  },
  {
    app: 'https://inspiring-spence-5714e5.netlify.com',
    ruler: 'shadowblock.id.blockstack',
  },
  {
    app: 'https://vigorous-minsky-b6a469.netlify.com',
    ruler: 'deadcoder0904.id.blockstack',
  },
  {
    app: 'https://goofy-yalow-a092bc.netlify.com',
    ruler: 'warpsmith.id.blockstack',
  },
  {
    app: 'https://goofy-yalow-a092bc.netlify.com',
    ruler: 'warpsmith.id.blockstack',
  },
  {
    app: 'https://pedantic-lumiere-b1877a.netlify.com',
    ruler: 'imdpkjangind.id.blockstack',
  },
  {
    app: 'https://thirsty-mcnulty-237372.netlify.com',
    ruler: 'adoankim.id.blockstack',
  },
  {
    app: 'https://optimistic-kare-baec0e.netlify.com',
    ruler: 'williamyu.id.blockstack',
  },
  {
    app: 'https://elegant-lalande-b83d6b.netlify.com',
    ruler: 'jamesshiow.id.blockstack',
  },
  {
    app: 'https://priceless-darwin-73bdf1.netlify.com',
    ruler: 'amolpatil.id.blockstack',
  },
  {
    app: 'https://play-blockstack-animal-kingdom.netlify.com',
    ruler: 'mrwindmills.id.blockstack',
  },
  {
    app: 'https://nervous-beaver-d0848d.netlify.com',
    ruler: 'blocktestt.id.blockstack',
  },
  {
    app: 'https://fervent-kalam-a029a8.netlify.com',
    ruler: 'mattwalter.id.blockstack',
  },
  {
    app: 'https://stupefied-galileo-a23377.netlify.com',
    ruler: 'kumailrizvi.id.blockstack',
  },
  {
    app: 'https://boring-bohr-1651c7.netlify.com',
    ruler: 'petikovacs.id.blockstack',
  },
  {
    app: 'https://musing-bassi-80f714.netlify.com',
    ruler: 'nimrujim.id.blockstack',
  },
  {
    app: 'https://focused-payne-a74052.netlify.com',
    ruler: 'al002042.id.blockstack',
  },
  {
    app: 'https://mystifying-wiles-555dcb.netlify.com',
    ruler: 'opheliagame.id.blockstack',
  },
  {
    app: 'https://laughing-pare-7b4420.netlify.com',
    ruler: 'bictoiner.id.blockstack',
  },
  {
    app: 'https://hungry-liskov-cc96d8.netlify.com',
    ruler: 'craigusr.id.blockstack',
  },
  {
    app: 'https://practical-blackwell-cbd234.netlify.com',
    ruler: 'samuraicode.id.blockstack',
  },
  {
    app: 'https://blokckchainserviceapp.netlify.com',
    ruler: 'blockchainserviceapp.id.blockstack',
  },
  {
    app: 'https://stoic-pike-20eba4.netlify.com',
    ruler: 'grahamulator.id.blockstack',
  },
  {
    app: 'https://keen-feynman-e9f2e4.netlify.com',
    ruler: 'anuppani.id.blockstack',
  },
  {
    app: 'https://xenodochial-gates-9c514b.netlify.com',
    ruler: 'omardubb.id.blockstack',
  },
  {
    app: 'https://eager-kalam-54104d.netlify.com',
    ruler: 'mcarthur.id.blockstack',
  },
  {
    app: 'https://lucid-mccarthy-b59d1b.netlify.com',
    ruler: 'leogau.id.blockstack',
  },
  {
    app: 'https://hungry-wozniak-1bcea8.netlify.com',
    ruler: 'gaslight.id.blockstack',
  },
  {
    app: 'https://relaxed-volhard-3b5598.netlify.com',
    ruler: 'michaeljiflorida.id.blockstack',
  },
  {
    app: 'https://infallible-torvalds-977516.netlify.com',
    ruler: 'sumansid.id.blockstack',
  },
  {
    app: 'https://focused-hopper-480e75.netlify.com',
    ruler: 'luizlopes.id.blockstack',
  },
  {
    app: 'https://animal-kingdoms.netlify.com',
    ruler: 'baunesworld.id.blockstack',
  },
  {
    app: 'https://unruffled-swirles-8c800c.netlify.com',
    ruler: 'teunvansambeek.id.blockstack',
  },
  {
    app: 'https://quizzical-raman-b26675.netlify.com',
    ruler: 'nullboots.id.blockstack',
  },
  {
    app: 'https://nifty-murdock-36d05c.netlify.com',
    ruler: 'harshjain.id.blockstack',
  },
  {
    app: 'https://optimistic-chandrasekhar-45b84d.netlify.com',
    ruler: 'noahkirsch.id.blockstack',
  },
  {
    app: 'https://heuristic-clarke-7a7159.netlify.com',
    ruler: 'ygbdevid.id.blockstack',
  },
  {
    app: 'https://gracious-curran-893dfa.netlify.com',
    ruler: 'sodosopa.id.blockstack',
  },
  {
    app: 'https://suspicious-lichterman-145b39.netlify.com',
    ruler: 'cerealenthusiast.id.blockstack',
  },
  {
    app: 'https://jolly-newton-fb6ca0.netlify.com',
    ruler: 'erikwlarsen.id.blockstack',
  },
  {
    app: 'https://ysundar.netlify.com',
    ruler: 'y_sundar.id.blockstack',
  },
  {
    app: 'https://agitated-jackson-bd9cce.netlify.com',
    ruler: 'w3bwizart.id.blockstack',
  },
  {
    app: 'https://quizzical-hugle-31365c.netlify.com',
    ruler: 'taquitochowder.id.blockstack',
  },
  {
    app: 'https://clever-darwin-6c93cc.netlify.com',
    ruler: 'stechgroup.id.blockstack',
  },
  {
    app: 'https://upbeat-stonebraker-f2fd32.netlify.com',
    ruler: 'cryptohodler.id.blockstack',
  },
  {
    app: 'https://relaxed-williams-c74403.netlify.com',
    ruler: 'satomedia.id.blockstack',
  },
  {
    app: 'https://vigilant-heyrovsky-f47611.netlify.com',
    ruler: 'markgeeromano.id.blockstack',
  },
  {
    app: 'https://stupefied-wiles-5cb1b7.netlify.com',
    ruler: 'shenshing.id.blockstack',
  },
  {
    app: 'https://stupefied-bartik-8d34c1.com',
    ruler: 'adityakumar.id.blockstack',
  },
  {
    app: 'https://vigilant-leakey-b6cb14.netlify.com',
    ruler: 'fugosthegreat.id.blockstack',
  },
  {
    app: 'https://inspiring-goldstine-c68a1d.netlify.com',
    ruler: 'aaronyih.id.blockstack',
  },
  {
    app: 'https://vibrant-engelbart-f1b42e.netlify.com',
    ruler: 'dhars0824.id.blockstack',
  },
  {
    app: 'https://pedantic-shannon-030ead.netlify.com',
    ruler: 'neoswarm.id.blockstack',
  },
  {
    app: 'https://zealous-goodall-25bbdd.netlify.com',
    ruler: 'sanjaysb.id.blockstack',
  },
  {
    app: 'https://inspiring-ritchie-b8edfa.netlify.com',
    ruler: 'pricardo.id.blockstack',
  },
  {
    app: 'https://hardcore-boyd-c8f471.netlify.com',
    ruler: 'thxbr549.id.blockstack',
  },
  {
    app: 'https://frosty-jepsen-94536a.netlify.com',
    ruler: 'smitjivani.id.blockstack',
  },
  {
    app: 'https://eager-stonebraker-0ccefb.netlify.com',
    ruler: 'jingtying.id.blockstack',
  },
  {
    app: 'https://angry-hawking-803cf7.netlify.com',
    ruler: 'pradamabhi.id.blockstack',
  },
  {
    app: 'https://cocky-jang-6fa9ba.netlify.com',
    ruler: 'seshnsesh.id.blockstack',
  },
  {
    app: 'https://serene-shannon-84c47b.netlify.com',
    ruler: 'darrengibney.id.blockstock',
  },
  {
    app: 'https://gallant-ramanujan-3ff903.netlify.com',
    ruler: 'ashish_singhal.id.blockstack',
  },
  {
    app: 'https://unruffled-cray-7d9e79.netlify.com',
    ruler: 'hellotest.id.blockstack',
  },
  {
    app: 'https://adoring-davinci-3e53eb.netlify.com',
    ruler: 'vincentholland.onename.id',
  },
  {
    app: 'https://compassionate-lumiere-021ec1.netlify.com',
    ruler: 'kachilero.id.blockstack',
  },
  {
    app: 'https://inspiring-kowalevski-8dba54.netlify.com',
    ruler: 'connordunham.id.blockstack',
  },
  {
    app: 'https://nostalgic-dijkstra-f9758d.netlify.com',
    ruler: 'aymentoumi.id.blockstack',
  },
  {
    app: 'https://elastic-wing-d76b60.netlify.com',
    ruler: 'andrewbrudnak.id.blockstack',
  },
  {
    app: 'https://ajithanand.netlify.com',
    ruler: 'ajithanand.id.blockstack',
  },
  {
    app: 'https://fervent-boyd-29d884.netlify.com',
    ruler: 'shelbydiamond518.id.blockstack',
  },
  {
    app: 'https://maya-animal-kingdom.netlify.com',
    ruler: 'notalephzero.id.blockstack',
  },
  {
    app: 'https://omeranimalkingdom.netlify.com',
    ruler: 'omercompany.id.blockstack',
  },
  {
    app: 'https://musing-hamilton-01b31a.netlify.com',
    ruler: 'adityabp721.id.blockstack',
  },
  {
    app: 'https://wonderful-beaver-325c6f.netlify.com',
    ruler: 'spaulding.id.blockstack',
  },
  {
    app: 'https://loving-wing-2bebe3.netlify.com',
    ruler: 'cargeins90.id.blockstack',
  },
  {
    app: 'https://brave-mahavira-d8b9c3.netlify.com',
    ruler: 'samadmoiz.id.blockstack',
  },
  {
    app: 'https://animal-kingdom-by-codelaryna.netlify.com',
    ruler: 'codelaryna.id.blockstack',
  },
  {
    app: 'https://fervent-minsky-cd3cf9.netlify.com',
    ruler: 'chris_jones.id.blockstack',
  },
  {
    app: 'https://modest-engelbart-0eec5f.netlify.com',
    ruler: 'brucechristie.id.blockstack',
  },
  {
    app: 'https://sleepy-edison-00e58f.netlify.com',
    ruler: 'teamomucho.id.blockstack',
  },
  {
    app: 'https://infallible-brattain-c0f919.netlify.com',
    ruler: 'jabaribell.id.blockstack',
  },
  {
    app: 'https://animal-kingdom.now.sh',
    ruler: 'ahmed_belhadj.id.blockstack',
  },
  {
    app: 'https://app.netlify.com/sites/dazzling-benz-e9613a',
    ruler: 'alearningbee.id.blockstack',
  },
  {
    app: 'https://hopeful-jang-c9ce1c.netlify.com',
    ruler: 'therealaverma.id.blockstack',
  },
  {
    app: 'https://cheesecake-mice.netlify.com',
    ruler: 'darthito00.id.blockstack',
  },
  {
    app: 'https://vedicastrology.netlify.com',
    ruler: 'vedicastrology.id.blockstack',
  },
  {
    app: 'https://infallible-ardinghelli-d10b25.netlify.com',
    ruler: 'mukaissi.id.blockstac',
  },
  {
    app: 'https://nostalgic-noyce-bbfa1e.netlify.com',
    ruler: 'clairesinozich.id.blockstack',
  },
  {
    app: 'https://boring-booth-f1c5e6.netlify.com',
    ruler: 'ryanckulp.id',
  },
  {
    app: 'https://admiring-ptolemy-ec6214.netlify.com',
    ruler: 'goodydev.id.blockstack',
  },
  {
    app: 'https://shadowhunter-kingdom.netlify.com',
    ruler: 'magnus_p8.id.blockstack',
  },
  {
    app: 'https://wonderful-poincare-10850e.netlify.com',
    ruler: 'doctrina.id.blockstack',
  },
  {
    app: 'https://boring-bhaskara-dfa4f0.netlify.com',
    ruler: 'ruwikmann.id.blockstack',
  },
  {
    app: 'https://determined-khorana-035527.netlify.com',
    ruler: 'blockychris.id.blockstack',
  },
  {
    app: 'https://pedantic-lamport-771322.netlify.com',
    ruler: 'raymonddeng.id.blockstack',
  },
  {
    app: 'https://lucid-tereshkova-d5b7ef.netlify.com',
    ruler: 'dcblackhouse.id.blockstack',
  },
  {
    app: 'https://colins-animal-kingdom.netlify.com',
    ruler: 'colindismuke.id.blockstack',
  },
  {
    app: 'https://elegant-kingdom.netlify.com',
    ruler: 'lovegratitude.id.blockstack',
  },
  {
    app: 'https://affectionate-clarke-d65d70.netlify.com',
    ruler: 'iferreira.id.blockstack',
  },
  {
    app: 'https://cranky-mahavira-26bfea.netlify.com',
    ruler: 'shawnantonucci.id.blockstack',
  },
  {
    app: 'https://animal-kingdom-bv.netlify.com',
    ruler: 'brooksvinyard.id.blockstack',
  },
  {
    app: 'https://vigorous-hawking-4f97df.netlify.com',
    ruler: 'jhaydendev.id.blockstack',
  },
  {
    app: 'https://upbeat-blackwell-6b07c7.netlify.com',
    ruler: 'darkstyrm.id.blockstack',
  },
  {
    app: 'https://awesome-animal-kingdom.netlify.com',
    ruler: 'adocator.id.blockstack',
  },
  {
    app: 'https://ecstatic-haibt-d35f9e.netlify.com',
    ruler: 'jeff007ali.id.blockstack',
  },
  {
    app: 'https://gracious-franklin-84624c.netlify.com',
    ruler: 'mjunaidasghar.id.blockstack',
  },
  {
    app: 'https://musing-shirley-883fc4.netlify.com',
    ruler: 'explorer.id.blockstack',
  },
  {
    app: 'https://focused-curie-e04620.netlify.com',
    ruler: 'trautman.id.blockstack',
  },
  {
    app: 'https://elegant-visvesvaraya-0ee302.netlify.com',
    ruler: 'harshit7.id.blockstack',
  },
  {
    app: 'https://cocky-hopper-116fb2.netlify.com',
    ruler: 'adroaldomartins.id.blockstack',
  },
  {
    app: 'https://elated-mahavira-9ff8bc.netlify.com',
    ruler: 'dorsatum.id.blockstack',
  },
  {
    app: 'https://admiring-einstein-e2cbce.netlify.com',
    ruler: 'neterblock.id.blockstack',
  },
  {
    app: 'https://trusting-yalow-75bf93.netlify.com',
    ruler: 'aminukano.id.blockstack',
  },
  {
    app: 'https://nifty-engelbart-64b745.netlify.com',
    ruler: 'danielmartin.id.blockstack',
  },
  {
    app: 'https://festive-bartik-136d47.netlify.com',
    ruler: 'mikespellcheck.id.blockstack',
  },
  {
    app: 'https://xenodochial-goldstine-04ec71.netlify.com',
    ruler: 'qrodgers.id.blockstack',
  },
  {
    app: 'https://zealous-curie-1c5d61.netlify.com',
    ruler: 'nimbustwothousand.id.blockstack',
  },
  {
    app: 'https://distracted-boyd-be788c.netlify.com',
    ruler: 'samiracle.id.blockstack',
  },
  {
    app: 'https://relaxed-jackson-680632.netlify.com',
    ruler: 'andrewdeal.id.blockchain',
  },
  {
    app: 'https://gifted-hermann-02ef62.netlify.com',
    ruler: 'Iflvegath.id.blockstack',
  },
  {
    app: 'https://distracted-swirles-f624ce.netlify.com',
    ruler: 'ranjhith.id.blockstack',
  },
  {
    app: 'https://stoic-lovelace-9328c2.netlify.com',
    ruler: 'suragusheth.id.blockstack',
  },
  {
    app: 'https://friendly-stonebraker-b91ed0.netlify.com',
    ruler: 'rajkumar.id.blockstack',
  },
  {
    app: 'https://priceless-lichterman-b8ccca.netlify.com',
    ruler: 'kristens.id.blockstack',
  },
  {
    app: 'https://happy-hermann-c2356d.netlify.com',
    ruler: 'imchriskitchens.id.blockstack',
  },
  {
    app: 'https://silly-sinoussi-10e90b.netlify.com',
    ruler: 'thibault_l.id.blockstack',
  },
  {
    app: 'https://elegant-stonebraker-70fbf6.netlify.com',
    ruler: 'entheome.id.blockstack',
  },
  {
    app: 'https://elated-saha-682bdf.netlify.com',
    ruler: 'pickpark.id.blockstack',
  },
  {
    app: 'https://quirky-chandrasekhar-cfb8e0.netlify.com',
    ruler: 'sjdftech.id.blockstack',
  },
  {
    app: 'https://heuristic-kowalevski-0e9a5d.netlify.com',
    ruler: 'realabbas.id.blockstack',
  },
  {
    app: 'https://kind-wilson-d5a196.netlify.com',
    ruler: 'josepservatlorca.id.blockstack',
  },
  {
    app: 'https://blockstack-animal-kingdom.netlify.com',
    ruler: 'kratosjv.id.blockstack',
  },
  {
    app: 'https://festive-shaw-b23343.netlify.com',
    ruler: 'wushuwei.id.blockstack',
  },
  {
    app: 'https://animal-kingdom.matteocorossigo95.now.sh',
    ruler: 'mcorossigo.id.blockstack',
  },
  {
    app: 'https://angry-hopper-791a28.netlify.com',
    ruler: 'darrelpol.id.blockstack',
  },
  {
    app: 'https://angry-noether-618c3e.netlify.com',
    ruler: 'jazbogross.id.blockstack',
  },
  {
    app: 'https://happy-aryabhata-011484.netlify.com',
    ruler: 'citrustux.id',
  },
  {
    app: 'https://keen-jepsen-7a5d1a.netlify.com',
    ruler: 'zachhoskins.id.blockstack',
  },
  {
    app: 'https://frosty-davinci-f19d7e.netlify.com',
    ruler: 'hrtkhrtk.id.blockstack',
  },
  {
    app: 'https://reverent-mahavira-208ba9.netlify.com',
    ruler: 'devshubham.id.blockstack',
  },
  {
    app: 'https://goofy-agnesi-9a539b.netlify.com',
    ruler: 'leodamiandorsey.id.blockstack',
  },
  {
    app: 'https://peaceful-wescoff-8bd2f0.netlify.com',
    ruler: 'pjklein_.id.blockstack',
  },
  {
    app: 'https://blockstack-tutorial.netlify.com',
    ruler: 'hannahclack.id.blockstack',
  },
  {
    app: 'https://eager-edison-af87db.netlify.com',
    ruler: 'cxreynard.id.blockstack',
  },
  {
    app: 'https://flamboyant-kare-0698a3.netlify.com',
    ruler: 'eduardovital.id.blockstack',
  },
  {
    app: 'https://flamboyant-darwin-394e11.netlify.com',
    ruler: 'bagpallab7.id.blockstack',
  },
  {
    app: 'https://confident-spence-82e7d4.netlify.com',
    ruler: 'hritikkumar.id.blockstack',
  },
  {
    app: 'https://relaxed-mirzakhani-1c1375.netlify.com',
    ruler: 'kingbobb.id.blockstack',
  },
  {
    app: 'https://mykingdom.netlify.com',
    ruler: 'dotrungkien.id.blockstack',
  },
  {
    app: 'https://fervent-goldberg-29d1f7.netlify.com',
    ruler: 'franzferdinan51.id.blockstack',
  },
  {
    app: 'https://harts-kingdom.netlify.com',
    ruler: 'mhartdev.id.blockstack',
  },
  {
    app: 'https://sleepy-bassi-e83747.netlify.com',
    ruler: 'angshublock.id.blockstack',
  },
  {
    app: 'https://quirky-lewin-0d1739.netlify.com',
    ruler: 'nazzareno.id.blockstack',
  },
  {
    app: 'https://elegant-torvalds-f4acec.netlify.com',
    ruler: 'dominiconorton.id.blockstack',
  },
  {
    app: 'https://nifty-brown-9ec8e2.netlify.com',
    ruler: 'nampham97.id.blockstack',
  },
  {
    app: 'https://blockstackanimalkingdom.web.app',
    ruler: 'zyra_zia.id.blockstack',
  },
  {
    app: 'https://epic-euler-b978c9.netlify.com',
    ruler: 'evrardts.id.blockstack',
  },
  {
    app: 'https://admiring-mclean-519468.netlify.com',
    ruler: 'ibrizshubham.id.blockstack',
  },
  {
    app: 'https://tender-hawking-e426f4.netlify.com',
    ruler: 'mcmonkeys1.id.blockstack',
  },
  {
    app: 'https://sharp-swartz-391b26.netlify.com',
    ruler: 'leinahtan.id.blockstack',
  },
  {
    app: 'https://mingiryu-animal-kingdom.netlify.com',
    ruler: 'mingiryu.id.blockstack',
  },
  {
    app: 'https://angry-villani-07efa1.netlify.com',
    ruler: 'viraz1996.id.blockstack',
  },
  {
    app: 'https://nostalgic-fermi-5d0239.netlify.com',
    ruler: 'chinkusimon.id.blockstack',
  },
  {
    app: 'https://sleepy-clarke-8f5ecb.netlify.com',
    ruler: 'marcomariscal.id.blockstack',
  },
  {
    app: 'https://trusting-lovelace-053391.netlify.com',
    ruler: 'gefbabash.id.blockstack',
  },
  {
    app: 'https://jolly-bohr-1ef536.netlify.com',
    ruler: 'kieranalexis.id.blockstack',
  },
  {
    app: 'https://naughty-hypatia-646ad8.netlify.com',
    ruler: 'ankurkayal.id.blockstack',
  },
  {
    app: 'https://westeros011.netlify.com',
    ruler: 'distorted_aura.id.blockstack',
  },
  {
    app: 'https://dreamy-hugle-033503.netlify.com',
    ruler: 'digitalsaas.id.blockstack',
  },
  {
    app: 'https://tuxverse.runkodapps.com',
    ruler: 'dyoungwd.id.blockstack',
  },
  {
    app: 'https://mystifying-lamport-3870ac.netlify.com',
    ruler: 'andpanait.id.blockstack',
  },
  {
    app: 'https://kingdom-of-wolves.netlify.com',
    ruler: 'bindalrohit.id.blockstack',
  },
  {
    app: 'https://wizardly-liskov-0c023d.netlify.com',
    ruler: 'freedom_is_coming.id.blockstack',
  },
  {
    app: 'https://focused-clarke-afdb56.netlify.com',
    ruler: 'mojenmojen.id.blockstack',
  },
  {
    app: 'https://trusting-dubinsky-b3e5c8.netlify.com',
    ruler: 'distinval.id.blockstack',
  },
  {
    app: 'https://eager-wright-71bbe6.netlify.com',
    ruler: 'guetorresdev.id.blockstack',
  },
  {
    app: 'https://tender-cori-43d4b4.netlify.com',
    ruler: 'cosmicnode13.id.blockstack',
  },
  {
    app: 'https://amazing-mcclintock-754a17.netlify.com',
    ruler: 'mharley12345.id.blockstack',
  },
  {
    app: 'https://gracious-panini-8bd70c.netlify.com',
    ruler: 'mlgsistema.id.blockstack',
  },
  {
    app: 'https://pensive-heyrovsky-740c31.netlify.com',
    ruler: 'hackmyway.id.blockstack',
  },
  {
    app: 'https://amazing-boyd-ddc29b.netlify.com',
    ruler: 'nsandomeno.id.blockstack',
  },
  {
    app: 'https://distracted-albattani-288b8b.netlify.com',
    ruler: 'srihari17.id.blockstack',
  },
  {
    app: 'https://clever-dijkstra-fdab4d.netlify.com',
    ruler: 'whoisyourdaddy.id.blockstack',
  },
  {
    app: 'https://musing-ramanujan-1af04b.netlify.com',
    ruler: 'fbo520741.id.blockstack',
  },
  {
    app: 'https://zealous-leavitt-f06036.netlify.com',
    ruler: 'walidmujahid.id.blockstack',
  },
  {
    app: 'https://vigilant-babbage-4c23b7.netlify.com',
    ruler: 'mkoltdenny.id.blockstack',
  },
  {
    app: 'https://quirky-tereshkova-d27e1e.netlify.com',
    ruler: 'aaveshks.id.blockstack',
  },
  {
    app: 'https://clever-noether-57ae87.netlify.com',
    ruler: 'imrishabh18.id.blockstack',
  },
  {
    app: 'https://nostalgic-ramanujan-79edec.netlify.com',
    ruler: 'devesh30.id.blockstack',
  },
  {
    app: 'https://blissful-curran-8475b6.netlify.com',
    ruler: 'pawanwarole.id.blockstack',
  },
  {
    app: 'https://gracious-lewin-431971.netlify.com',
    ruler: 'apoorvlathey.id.blockstack',
  },
  {
    app: 'https://happy-feynman-c2bf6a.netlify.com',
    ruler: 'harshakshit.id.blockstack',
  },
  {
    app: 'https://quizzical-tesla-9181e1.netlify.com',
    ruler: 'adityavardhansingh.id.blockstack',
  },
  {
    app: 'https://frosty-villani-1a58db.netlify.com',
    ruler: 'codetronaut.id.blockstack',
  },
  {
    app: 'https://quizzical-austin-c21cb0.netlify.com',
    ruler: 'mohit23x.id.blockstack',
  },
  {
    app: 'https://wonderful-bhabha-6a5186.netlify.com',
    ruler: 'yashudev.id.blockstack',
  },
  {
    app: 'https://hopeful-northcutt-17f538.netlify.com',
    ruler: 'raghavpahwa.id.blockstack',
  },
  {
    app: 'https://serene-dijkstra-749ad1.netlify.com',
    ruler: 'aayushbisen.id.blockstack',
  },
  {
    app: 'https://serene-mcnulty-4a8fb1.netlify.com',
    ruler: 'anon6405.id.blockstack',
  },
  {
    app: 'https://eager-noyce-825eb9.netlify.com',
    ruler: 'siddhant356.id.blockstack',
  },
  {
    app: 'https://hxncskingdom.netlify.com',
    ruler: 'hexandcube.id.blockstack',
  },
  {
    app: 'https://hungry-perlman-5336e7.netlify.com',
    ruler: 'shakeabi.id.blockstack',
  },
  {
    app: 'https://distracted-panini-8cc564.netlify.com',
    ruler: 'nayanajith.id.blockstack',
  },
  {
    app: 'https://musing-wiles-d5ff5f.netlify.com',
    ruler: 'nishith13.id.blockstack',
  },
  {
    app: 'https://quizzical-raman-c95f4d.netlify.com',
    ruler: 'dewanshrawat15.id.blockstack',
  },
  {
    app: 'https://affectionate-easley-5c3872.netlify.com',
    ruler: 'amyzhangtt.id.blockstack',
  },
  {
    app: 'https://parthpandyappp.netlify.com',
    ruler: 'parthpandyappp.id.blockstack',
  },
  {
    app: 'https://trusting-beaver-078a16.netlify.com',
    ruler: 'zblockstack.id.blockstack',
  },
  {
    app: 'https://ajkingdom.netlify.com',
    ruler: 'amaljose.id.blockstack',
  },
  {
    app: 'https://inspiring-heyrovsky-a876da.netlify.com',
    ruler: 'aldocano.id.blockstack',
  },
  {
    app: 'https://jovial-darwin-b3c316.netlify.com',
    ruler: 'diwansimran.id.blockstack',
  },
  {
    app: 'https://friendly-mahavira-a80bc6.netlify.com',
    ruler: 'matundaphilip.id.blockstack',
  },
  {
    app: 'https://ecstatic-perlman-131b80.netlify.com',
    ruler: 'codingalways.id.blockstack',
  },
  {
    app: 'https://angry-swartz-d2b25c.netlify.com',
    ruler: 'pgxplorer.id.blockstack',
  },
  {
    app: 'https://curatedyoutube.netlify.com',
    ruler: 'sundarpichai.id.blockstack',
  },
  {
    app: 'https://zealous-kepler-68ac4d.netlify.com',
    ruler: 'anupamakshat0410.id.blockstack',
  },
  {
    app: 'https://trusting-nobel-3b4921.netlify.com',
    ruler: 'samjwu1000.id.blockstack',
  },
  {
    app: 'https://practical-heyrovsky-0c7eec.netlify.com',
    ruler: 'guykhmel.id.blockstack',
  },
  {
    app: 'https://thirsty-chandrasekhar-6835a4.netlify.com',
    ruler: 'anuragjha.id.blockstack',
  },
  {
    app: 'https://youthful-brattain-6e2100.netlify.com',
    ruler: 'lex111__.id.blockstack',
  },
  {
    app: 'https://cocky-franklin-7e9416.netlify.com',
    ruler: 'mbareford.id.blockstack',
  },
  {
    app: 'https://thirsty-leakey-dc4a67.netlify.com',
    ruler: 'mpereannor.id.blockstack',
  },
  {
    app: 'https://frosty-brahmagupta-fcf317.netlify.com',
    ruler: '0xyozaam.id.blockstack',
  },
  {
    app: 'https://awesome-ardinghelli-23e0d9.netlify.com',
    ruler: 'baconmanic.id.blockstack',
  },
  {
    app: 'https://epic-liskov-b9b35e.netlify.com',
    ruler: 'soulreapermxi619.id.blockstack',
  },
  {
    app: 'https://practical-einstein-6d63c5.netlify.com',
    ruler: 'abhijeetjaswal2704.id.blockstack',
  },
  {
    app: 'https://flamboyant-davinci-74a77f.netlify.com',
    ruler: 'crashoverloaded.id.blockstack',
  },
  {
    app: 'https://jovial-montalcini-714a37.netlify.com',
    ruler: 'gk_intruder.id.blocstacks',
  },
  {
    app: 'https://romantic-mclean-1a0335.netlify.com',
    ruler: 'rounik2000.id.blockstack',
  },
  {
    app: 'https://youthful-ride-899c28.netlify.com',
    ruler: 'soulbk201.id.blockstack',
  },
  {
    app: 'https://this-is-my-kingdom-come.netlify.com',
    ruler: 'utkarshsingh99.id.blockstack',
  },
  {
    app: 'https://inspiring-brown-e28ea8.netlify.com',
    ruler: 'yurogini.id.blockstack',
  },
  {
    app: 'https://agitated-volhard-be8cc0.netlify.com',
    ruler: 'sriniketh.id.blockstack',
  },
  {
    app: 'https://cranky-pike-449f21.netlify.com',
    ruler: 'ryanpereira.id.blockstack',
  },
  {
    app: 'https://naughty-brown-459b00.netlify.com',
    ruler: 'kchaman101.id.blockstack',
  },
  {
    app: 'https://angry-yonath-ab833f.netlify.com',
    ruler: 'logan11x.id.blockstack',
  },
  {
    app: 'https://infallible-shockley-36179e.netlify.com',
    ruler: 'monishbasaniwal2.id.blockstack',
  },
  {
    app: 'https://abhishek-kingdom.netlify.com',
    ruler: 'abhishek_21.id.blockstack',
  },
  {
    app: 'https://vibrant-lewin-26df0b.netlify.com',
    ruler: 'gunjanmimo.id.blockstack',
  },
  {
    app: 'https://gracious-bartik-1c9621.netlify.com',
    ruler: 'rounik.2000.id.blockstack',
  },
  {
    app: 'https://gallant-hamilton-88496c.netlify.com',
    ruler: 'sudiptoghosh.id.blockstack',
  },
  {
    app: 'https://sleepy-knuth-b518f4.netlify.com',
    ruler: 'mukebaaj.id.blockstack',
  },
  {
    app: 'https://affectionate-boyd-605ffb.netlify.com',
    ruler: 'newedia12.id.blockstack',
  },
  {
    app: 'https://relaxed-mccarthy-5a3e40.netlify.com',
    ruler: 'prapti05.id.blockstack',
  },
  {
    app: 'https://xenodochial-booth-b5ef9e.netlify.com',
    ruler: 'suchanablocky.id.blockstack',
  },
  {
    app: 'https://jolly-hugle-d4adf8.netlify.com',
    ruler: 'sspeedy99.id.blockstack',
  },
  {
    app: 'https://suspicious-elion-bb2fd5.netlify.com',
    ruler: 'sayanide.id.blockstack',
  },
  {
    app: 'https://epic-lalande-57a6c8.netlify.com',
    ruler: 'chayan19.id.blockstack',
  },
  {
    app: 'https://affectionate-hugle-3959ea.netlify.com',
    ruler: 'major_tangomj.id.blockstack',
  },
];
