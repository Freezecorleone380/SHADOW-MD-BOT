function a3_0x1007(_0x35b736,_0x33c2a5){const _0x330b48=a3_0x330b();return a3_0x1007=function(_0x1007f0,_0x1ae014){_0x1007f0=_0x1007f0-0x140;let _0x2a286d=_0x330b48[_0x1007f0];return _0x2a286d;},a3_0x1007(_0x35b736,_0x33c2a5);}const a3_0x22f5d9=a3_0x1007;(function(_0x9bd64e,_0x59c72f){const _0x315e7d=a3_0x1007,_0x1f30dd=_0x9bd64e();while(!![]){try{const _0x37720e=parseInt(_0x315e7d(0x149))/0x1+-parseInt(_0x315e7d(0x161))/0x2+parseInt(_0x315e7d(0x15b))/0x3+-parseInt(_0x315e7d(0x164))/0x4+-parseInt(_0x315e7d(0x144))/0x5+-parseInt(_0x315e7d(0x14a))/0x6*(-parseInt(_0x315e7d(0x15a))/0x7)+parseInt(_0x315e7d(0x159))/0x8*(parseInt(_0x315e7d(0x148))/0x9);if(_0x37720e===_0x59c72f)break;else _0x1f30dd['push'](_0x1f30dd['shift']());}catch(_0x70cbc6){_0x1f30dd['push'](_0x1f30dd['shift']());}}}(a3_0x330b,0x7c5a9),require(a3_0x22f5d9(0x156))['config']());const {Pool}=require('pg');let s=require(a3_0x22f5d9(0x160));var dbUrl=s['DATABASE_URL']?s[a3_0x22f5d9(0x162)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntilienTable(){const _0x3d28ec=a3_0x22f5d9,_0x48edd1=await pool[_0x3d28ec(0x163)]();try{await _0x48edd1[_0x3d28ec(0x14f)](_0x3d28ec(0x145)),console['log'](_0x3d28ec(0x143));}catch(_0x544f64){console[_0x3d28ec(0x154)](_0x3d28ec(0x14e),_0x544f64);}finally{_0x48edd1[_0x3d28ec(0x146)]();}}createAntilienTable();async function ajouterOuMettreAJourJid(_0x282456,_0x16c20f){const _0x3ffcc0=a3_0x22f5d9,_0x3aa32c=await pool[_0x3ffcc0(0x163)]();try{const _0x435502=await _0x3aa32c[_0x3ffcc0(0x14f)](_0x3ffcc0(0x158),[_0x282456]),_0xaa5cd2=_0x435502['rows'][_0x3ffcc0(0x15c)]>0x0;_0xaa5cd2?await _0x3aa32c['query'](_0x3ffcc0(0x155),[_0x16c20f,_0x282456]):await _0x3aa32c[_0x3ffcc0(0x14f)](_0x3ffcc0(0x151),[_0x282456,_0x16c20f,_0x3ffcc0(0x142)]),console[_0x3ffcc0(0x153)](_0x3ffcc0(0x14c)+_0x282456+_0x3ffcc0(0x150));}catch(_0x34ab50){console[_0x3ffcc0(0x154)]('Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,',_0x34ab50);}finally{_0x3aa32c[_0x3ffcc0(0x146)]();}};async function mettreAJourAction(_0x1bd1c2,_0x5fe63e){const _0x452ef3=a3_0x22f5d9,_0x51bb8b=await pool[_0x452ef3(0x163)]();try{const _0x3a4bd2=await _0x51bb8b[_0x452ef3(0x14f)](_0x452ef3(0x158),[_0x1bd1c2]),_0x46fce6=_0x3a4bd2[_0x452ef3(0x15f)]['length']>0x0;_0x46fce6?await _0x51bb8b[_0x452ef3(0x14f)](_0x452ef3(0x14d),[_0x5fe63e,_0x1bd1c2]):await _0x51bb8b[_0x452ef3(0x14f)](_0x452ef3(0x151),[_0x1bd1c2,'non',_0x5fe63e]),console[_0x452ef3(0x153)](_0x452ef3(0x157)+_0x1bd1c2+_0x452ef3(0x141));}catch(_0x1fd06b){console[_0x452ef3(0x154)](_0x452ef3(0x15d),_0x1fd06b);}finally{_0x51bb8b[_0x452ef3(0x146)]();}};async function verifierEtatJid(_0x3842ab){const _0x54ffd1=a3_0x22f5d9,_0x2804d9=await pool[_0x54ffd1(0x163)]();try{const _0x256a3a=await _0x2804d9[_0x54ffd1(0x14f)](_0x54ffd1(0x14b),[_0x3842ab]);if(_0x256a3a[_0x54ffd1(0x15f)]['length']>0x0){const _0x59efa5=_0x256a3a['rows'][0x0][_0x54ffd1(0x140)];return _0x59efa5===_0x54ffd1(0x152);}else return![];}catch(_0x2e20a6){return console[_0x54ffd1(0x154)](_0x54ffd1(0x147),_0x2e20a6),![];}finally{_0x2804d9[_0x54ffd1(0x146)]();}};async function recupererActionJid(_0x3cbeeb){const _0x5ad428=a3_0x22f5d9,_0xc2c9b8=await pool[_0x5ad428(0x163)]();try{const _0x47ec33=await _0xc2c9b8[_0x5ad428(0x14f)]('SELECT\x20action\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1',[_0x3cbeeb]);if(_0x47ec33[_0x5ad428(0x15f)][_0x5ad428(0x15c)]>0x0){const _0x4d5fc5=_0x47ec33[_0x5ad428(0x15f)][0x0]['action'];return _0x4d5fc5;}else return _0x5ad428(0x142);}catch(_0x5e4c9f){return console[_0x5ad428(0x154)](_0x5ad428(0x15e),_0x5e4c9f),_0x5ad428(0x142);}finally{_0xc2c9b8[_0x5ad428(0x146)]();}};function a3_0x330b(){const _0xbab469=['6153fILHgD','268887TIZotu','length','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:','Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:','rows','../set','1666128NMFqXA','DATABASE_URL','connect','3769520LdgdEL','etat','\x20dans\x20la\x20table\x20\x27antilien\x27.','supp','La\x20table\x20\x27antilien\x27\x20a\x20été\x20créée\x20avec\x20succès.','2499700UnRcDK','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antilien\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','release','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20','7893ZGUhCc','1014097HFLsFi','4668sIRzFG','SELECT\x20etat\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','JID\x20','UPDATE\x20antilien\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antilien\x27:','query','\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antilien\x27.','INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','oui','log','error','UPDATE\x20antilien\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','dotenv','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','9096JjLUnX'];a3_0x330b=function(){return _0xbab469;};return a3_0x330b();}module['exports']={'mettreAJourAction':mettreAJourAction,'ajouterOuMettreAJourJid':ajouterOuMettreAJourJid,'verifierEtatJid':verifierEtatJid,'recupererActionJid':recupererActionJid};