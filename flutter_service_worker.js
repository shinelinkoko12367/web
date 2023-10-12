'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a037ec092c990daadec4abba024a204d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5f1c14db68371cb9943e98feb379ec0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d6d4cf5430b990f1810621056d6e99b",
".git/logs/refs/heads/main": "7c57f8818d262601a905b48dc87ca5e0",
".git/logs/refs/remotes/origin/main": "83be1b591312c3fea49be8cef59ac0e1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/05/9f60cf7043c2abd8f21b664b736edefa6b3661": "af27838cfffbc1f8cb9d3b2f388b37bc",
".git/objects/08/b652c4e83c4a86f01c1439a6a94dd1d4b4feb3": "e45c5dd12de8c54db14cc7087c0832fc",
".git/objects/0d/43f2100f5a2c543664fc33520b3a0f990dbc5d": "852752fce7b90385cdd4c8350e5bf765",
".git/objects/0d/8f0af634dcc14c6281434ff5f1c0b6e30bbfd6": "cf3345cb037b377ac28b330f990d0a1f",
".git/objects/0e/b0927821c6707a9831e7f856e4ff956101f9de": "0caf49576ff0cea089c354b793663b9f",
".git/objects/0e/c2ab01f28d4f2accd4421e9fc867f2d4b29cf3": "8a643484bc424b54306edbe8a1328972",
".git/objects/13/431011dc66ef5bd8f59c47605d37947813f95c": "ca767aa5b88cb8b2d2597f65cde5bcf2",
".git/objects/16/ea6e96c83a8e1a9d684b8c506cd531019182ef": "9c8e28a6cafdb8f03123598f5ef04ff3",
".git/objects/1b/a3561ef75ef036848794f94b1befc193cd7318": "d768bd2aeb2ef51bde6a8c2aee9ee624",
".git/objects/1e/e1635ba3cd43fa3a4aa62889ab63ba9c5e805f": "793dec7ccba19114dcbcb7f21ba87835",
".git/objects/22/53edc2b18dc367ab4125fdc595b3d02dceeca4": "10d5c0e0d855ba8e08bce4a6d69edb98",
".git/objects/27/4e0c061410cf49bd8dcd8c53d9ccf350ca64b0": "d073836162526d6bb37c3c6427f44ce0",
".git/objects/2f/d843a1dac06b338fb834051ee122ec4d4183ec": "9fca62fd62a4f2140805769eac777106",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/34/f06a77cbbdab993df67b61f52a0acd6e2b3adc": "11e4169f7865f90f384c0b3861c666cc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/dc7c78320855d928dcb306a43bdb0e9ef386ae": "44571ce91cbffdd60493fd25eeba2bdc",
".git/objects/39/0e39658f598e2ae87f25bab1fa9af32ea5a5bf": "cc0f02a2657b14515caf22328247bdb7",
".git/objects/3e/f34e196449a252bb31b42a5a365b2b3037bc4b": "438b74a183bba6783a743dc0c68390f0",
".git/objects/42/438a941a9000fa263033ec8308baa0c636f5a6": "f12694bb6e0daad357cb92bb2c66e93b",
".git/objects/45/0aa7965d16fe3dc3977f891fb0be5230f74677": "c7ff68cd8e76ea00a5319deb005805e0",
".git/objects/45/3871575cb6ad34d30add8ca69b0759fb29d2ea": "96b8d898369aa5af6c6086af50d0726a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4dc2bfbfb479fd2eb4a56a59d7991fe9281093": "9f90c5ed4538f60bca75e25886ac86e9",
".git/objects/4a/7ffc673e955d0bb371e0f81bb980ccbafd5758": "acbbb9a3a9ebf874fc3e8d13fb0c2000",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/b2f6d15950ade87b61489c30f4fd8a4b8cadd8": "8ca0740d2b3544c5fc4ef1dd74253a70",
".git/objects/54/667dc3810ccafda9c13721d3b831816e00f0af": "defa11e901b689957e13f35f6643439b",
".git/objects/54/f0448cb3037764f92713100ee256110a4d8daa": "27f5d09b73ca6b22608dba22be10d040",
".git/objects/5b/94feceb71293334aa434d65c222dae9476f3e9": "a1df368c6eac73fbb3dbb5596bf52c9d",
".git/objects/5f/3cc1d2813958dd22f652d49b3cd660c46f76f3": "b2961bffd74e9e7ff6d0e0fa6d1c2b7f",
".git/objects/62/ed7d4dc0759d2e3c42c611bcdd86b30dd1f0ed": "29bbc506831f05ec9621a3dd4aa2f5dd",
".git/objects/6b/fe3cb24fd96a86f6f9a498d665aa51a4679bbf": "0030c7638865924d5d19e6052f19cb80",
".git/objects/71/434fb413d101be9b43a42ad030cfc621913e1a": "8388027b20c21c588bcfea41eabfc6cc",
".git/objects/71/5527ede39b56d14010695c5430c090af62b6db": "ac39b363592ae765e1885c7fc21a3050",
".git/objects/7b/8dadf98f4497193a3e52c3ce9f7d2f3620b295": "f82f375fc53f067a0b57678cfd27de4d",
".git/objects/7c/403b9e601e0e5e26325417db87d0438963fa95": "ec0893da5ddce5c9ef31bf5b8c9803fb",
".git/objects/7c/d35f78fa0539668bed82154b5f5487ee5cc19e": "ad3bfd6cab777d2827b4d1bb7deb071c",
".git/objects/7f/bff8be3c4b13ebad45cbb733bb66aea3d69596": "63f23a578b46a746efde777943ffd04f",
".git/objects/80/812a1144a688af0fe9b4b28b4c10800df7392e": "6b453fc1b1d534724ca654e02bdc2c06",
".git/objects/81/e0db41811b1c56b31cab47a833300420074fac": "27a2510364338ce62d79b6fcd5598d61",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/bb3724c482fe247a45a6f49049cb332f8749f1": "f0328cb7a801e2ea2447dc6ac9f56a45",
".git/objects/94/ab7f540e16b88550c66cca5fd6a7ca2f4ce153": "1fd56e3f3213e494f31f15072962414b",
".git/objects/95/5976928cf57d0f7ae50a089807288bace2f84e": "0c4aabbbc05be67f324ac8a3a4f7c91d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/98/d77c6a81cdea869ae062f1381a476b5749eb5a": "eb695e228729d9bc3581518f3210560b",
".git/objects/9b/0f65c329dd9fb92e3451dab30599dce76d2f75": "cf770727303556a4b51319eab4a3d647",
".git/objects/9c/c38a447af86ba409528c50d8c77decc9f860cd": "fbdd6d31af809d6a7f9b72af0e23fed0",
".git/objects/9f/783f639a563fc9eebfc32b83a2a6ba5164c439": "28594d7f2aff3dbe61c41e8f423aede1",
".git/objects/a0/5b981e31f10a0fee3226c21ba1ec479780eac8": "fed8b822ab20e4e130e7f727b0c4b2f5",
".git/objects/a0/ad8ee8e0cc523ec702306508dcc5e9309590e3": "63770c58eaebd7538c8f41167cd4df95",
".git/objects/a2/7f03404388b54788c8b0eba32dafd21ad93b2f": "4740a31dab7418f9e2c69995026eac38",
".git/objects/a4/26a77cb4648f3e89dd62bdcb79026936df1ed8": "ba1d32ceac865c234f7c8de6766764a7",
".git/objects/a6/b1c2624faa8ac1beaa306f0cc9ddf056282621": "cc373ab6a5990d4a71158327e24cc785",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/31dc5541a4517a9d156b3ec60e39c826aedb75": "76a00eb9ef291439bca9c1f5ed163862",
".git/objects/b5/7c4e8a3350582d38927eb5c69c9645e89df02b": "2c5e6dec6c3b7a256826bd3478e40688",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/3cbcc8f83c687e4c09170f1d0bcdd9681f8427": "6d72dd50cc99e7ceab6b8641371ff2a9",
".git/objects/bf/4ce22aa176924905d2358a769f6d93a5e4a289": "30e708f57a6d9bb13c1ba6ec263dcb24",
".git/objects/c2/62e30be5d87c026f4110ab18f8255d3aff62e8": "517ef7623db9ed64e898e4ef4f26a5ef",
".git/objects/c6/2646c247e56f17d92fa1586f785cb6bf1caf91": "c1b9c64658ee78eb4c4d2828b3e43039",
".git/objects/c7/7a0ddd65c75945d7ae185ef5d9d9475092b1ac": "28830aa7c16de8f67903dc3395bfce37",
".git/objects/c7/7abc31b340b0759871c2003b24296a60d3e9ad": "66a06e43a9b52076143c9bef0070b442",
".git/objects/c8/9c0f5599a284fea2565369c2123750a91d9be9": "90594eac17ab2578073cfe5533e898b4",
".git/objects/cc/28fedb01793ac67abca6badfd849647a8f9dab": "fbbcf1d3ae97908f38ad6a8a163742cb",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/f8884b63ac2ad03942a50680641e4aeb648dd4": "5f37e9fee0e98ffb76be20ed4e98cebd",
".git/objects/de/0488de6f605b5f0069dc3ac37379596e5de250": "54a6b03036affadd96959d09712b9c5e",
".git/objects/de/489bd084d103e33fd4286fe5b5e46543685c23": "51ffc46f1f0a303370e3183c96212f7a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/348c6784b8f3ec5bf92c53bf5f1a5c94a30307": "da890a9273df221ce044b7a1f1108891",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3d49038f7e1e0348b91cf6318040dd28e55620": "fc69c93b991cd1d654828f47e232b22b",
".git/objects/f3/2c270e139e6e35d9f7deb3ff081fabdcf0cfa3": "a06943feaae9eebb8e34775342ad3747",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f9/a6f20ad257f699275d6d320d62f6bcd84a9658": "4ee2124a6db3005fef9e22e678a94625",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/4b507936546372146c167a7fdf78c18c879bb7": "8c9cf5784e66769e00d68148e9e7fed6",
".git/objects/ff/408fcbd272b916da30adee02a44d929da06667": "8a518afc64770e766b7cc19548764db9",
".git/refs/heads/main": "6bc11ba06a4b280d6cb0991fb8bb8f18",
".git/refs/remotes/origin/main": "6bc11ba06a4b280d6cb0991fb8bb8f18",
"assets/AssetManifest.bin": "bd9d4a213acfcfd77d9f15f77c05d827",
"assets/AssetManifest.json": "0fc0ce73d6d52a3e77748609d2f27ea9",
"assets/assets/images/aya-go.png": "bc3f1c434b4627ebb15e577a5eb43a5e",
"assets/assets/images/aya-joy.png": "303e8a08935632b88782e67ee74fbd6b",
"assets/assets/images/aya-pay-logo.png": "06004dfeae46319768313078e4fad9d2",
"assets/assets/images/ayaSompoLogo.png": "70cc123c59ee37191dfe435dea6dab1b",
"assets/assets/images/ayasompo_claim_red%25201.png": "ffb5b1ab8e35ec3f3862b1c2d8f7e310",
"assets/assets/images/ayasompo_claim_red.webp": "96fd1e9f8809842dde0d8fbb57af07d0",
"assets/assets/images/ayasompo_epayment_red%25201.png": "8dd3108e7e0c8b9c6b832367ea07fe29",
"assets/assets/images/ayasompo_epayment_red.webp": "6af01f13ba22d3b1d263c6682009615f",
"assets/assets/images/ayasompo_locationmap_red%25201.png": "336bacb0f23a3c8cdc574ec2f9fce5b9",
"assets/assets/images/ayasompo_locationmap_red.webp": "7069d8996a72d5f3d32e686dbed668a6",
"assets/assets/images/ayasompo_premium_calculator_red%25201.png": "0acc8da6ed0bbbeb074e675ca2610e26",
"assets/assets/images/ayasompo_premium_calculator_red.webp": "1a9f8ea5549f534ff8cdd231ad68e777",
"assets/assets/images/background.png": "6e16dd141d8bee1df4ba4cc8c2aa7107",
"assets/assets/images/bell.png": "d8332148eda598289fe8eb4cf4874d20",
"assets/assets/images/Chat.png": "06402913151022f11aa60eb89a2462d0",
"assets/assets/images/finished.png": "51ced03d452ee05cbdf9f143cde464e1",
"assets/assets/images/Frame%252054.png": "5ca71056cdc66a30a0980f564c9c6ad0",
"assets/assets/images/Frame%252055.png": "e4b5e603366c87e362046496d658d968",
"assets/assets/images/Frame%252056.png": "d44400fde7cc7442c3d9439a0a180ce6",
"assets/assets/images/Home.png": "f793868674af38be844f24742f3b399e",
"assets/assets/images/Icon.png": "08b825058a99e42192ce51d426ee2551",
"assets/assets/images/Layer_1.png": "3002981a28181fcf222e56c45f0d5b70",
"assets/assets/images/Menu.png": "e7935a496a18a9bd8fe7de16942b6e5a",
"assets/assets/images/motor.png": "5d5d50fc867ee92bc4699dab9595b7aa",
"assets/assets/images/open.png": "f90663732d0f6c06c9ee56ca5afbfca1",
"assets/assets/images/pic1.png": "954ce762cde68f589cd4994b52113854",
"assets/assets/images/pic2.png": "c20ebf85a4d393f95be35118781550cc",
"assets/assets/images/pic3.png": "a4947a98dd9e13b574e618ad1ce51b9e",
"assets/assets/images/product.ai": "d44958c3a0745cb430f1d4f2c32de7dd",
"assets/assets/images/products/aya%2520sompo%2520logo.png": "c5d3376443bb21deb2a99e1f8ad5e7db",
"assets/assets/images/products/Cargo%2520Inland%2520Transit.png": "968a22d69db1a058232803bec7e68f61",
"assets/assets/images/products/cl.png": "e1f34ae6b4bf8b79231b2d4b1a27e6b0",
"assets/assets/images/products/commercial%2520product%2520icon.png": "00c433fdbb169cbf3102dd47dd4206d9",
"assets/assets/images/products/commercial%2520product%2520red.png": "e1f34ae6b4bf8b79231b2d4b1a27e6b0",
"assets/assets/images/products/commercial%2520product.png": "bf02e228c89e4d86f5eb679174152f20",
"assets/assets/images/products/Contractor's%2520&%2520Erection.png": "fc9d4beaab1796d4afb16bf2be146fe8",
"assets/assets/images/products/factory.png": "5ef30f3995ff8d8601ad8cf5de7039a7",
"assets/assets/images/products/fire.png": "0ca8aaedc9d519c90aa877f75280b5ac",
"assets/assets/images/products/health.png": "a4452cf3f8f132d987803cd40cfd1da8",
"assets/assets/images/products/IAR%2520Property%2520Insurance.png": "5ef30f3995ff8d8601ad8cf5de7039a7",
"assets/assets/images/products/Marine%2520Cargo%2520Insurance.png": "b95310e2c70f17eac7641ed4724bd82d",
"assets/assets/images/products/motor.png": "0c4c1ccb7e0002e818938e47adac1e57",
"assets/assets/images/products/personal%2520accident.png": "494973e0a7397157b205a7491950e71f",
"assets/assets/images/products/personal%2520product%2520red.png": "b359c77ada2d212be884baca216a460b",
"assets/assets/images/products/personal%2520product.png": "3240669a1df228d336fb258f5cd09093",
"assets/assets/images/products/Vector%2520Smart%2520Object13.png": "0c4c1ccb7e0002e818938e47adac1e57",
"assets/assets/images/products/Vector%2520Smart%2520Object14.png": "d9a7c1dee357031289641c771c0ae188",
"assets/assets/images/products/Vector%2520Smart%2520Object15.png": "5c4f89e3f48644090a701dc84dae40ea",
"assets/assets/images/profile.png": "093efc82bb1aca8c4b1a83cf889ea716",
"assets/assets/images/repair.png": "89f80091dbeace15b70a95f75185fc20",
"assets/assets/images/Schedule.png": "506964cae6bf4b828695f7838ac3c747",
"assets/assets/images/shield.png": "2035e2925d9ce22d96b092bfd04f620e",
"assets/assets/images/survey.png": "320b73c5e76e043344e1bcbc0979d0b5",
"assets/assets/images/user.png": "59348fae7d211eb256fa7d210eb9447b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4fb959a23604cc7688f6662c6e64bc8",
"assets/NOTICES": "4e3488253ec33d7546626dc70d3e10d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7a341fac9180fd1f06b36853603931",
"/": "bf7a341fac9180fd1f06b36853603931",
"main.dart.js": "751484ac28b210677a526457a81162d4",
"manifest.json": "18193fea3fc84db0f33314e4ddd6bb21",
"version.json": "99e46ebeac972c9b35e679f332a62a1e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
