const a2_0x6b4911=a2_0xf06f;(function(_0x22010c,_0x35e179){const _0x3beb62=a2_0xf06f,_0x4b37ce=_0x22010c();while(!![]){try{const _0x343252=parseInt(_0x3beb62(0x1a0))/0x1+parseInt(_0x3beb62(0x19e))/0x2+-parseInt(_0x3beb62(0x18d))/0x3*(parseInt(_0x3beb62(0x189))/0x4)+parseInt(_0x3beb62(0x194))/0x5+-parseInt(_0x3beb62(0x198))/0x6+-parseInt(_0x3beb62(0x199))/0x7+parseInt(_0x3beb62(0x192))/0x8;if(_0x343252===_0x35e179)break;else _0x4b37ce['push'](_0x4b37ce['shift']());}catch(_0x11dcf3){_0x4b37ce['push'](_0x4b37ce['shift']());}}}(a2_0x569d,0x514dd),require(a2_0x6b4911(0x181))[a2_0x6b4911(0x185)]());function a2_0xf06f(_0x5d0c24,_0x35806a){const _0x569dfb=a2_0x569d();return a2_0xf06f=function(_0xf06f17,_0xe50911){_0xf06f17=_0xf06f17-0x180;let _0x5ab373=_0x569dfb[_0xf06f17];return _0x5ab373;},a2_0xf06f(_0x5d0c24,_0x35806a);}const {Pool}=require('pg');function a2_0x569d(){const _0x5c66eb=['postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','726405pUPCXg','JID\x20','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antibot\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','non','1956606VvGbJQ','2310686NuHfuA','query','length','SELECT\x20action\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','INSERT\x20INTO\x20antibot\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','1329674ubDSsG','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:','303954jmxEvJ','La\x20table\x20\x27antibot\x27\x20a\x20été\x20créée\x20avec\x20succès.','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','dotenv','release','\x20dans\x20la\x20table\x20\x27antibot\x27.','exports','config','error','supp','rows','740964BGvaEn','log','DATABASE_URL','connect','3zQEifj','oui','SELECT\x20etat\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','action','SELECT\x20*\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','483112EHRgCl'];a2_0x569d=function(){return _0x5c66eb;};return a2_0x569d();}let s=require('../set');var dbUrl=s[a2_0x6b4911(0x18b)]?s['DATABASE_URL']:a2_0x6b4911(0x193);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntibotTable(){const _0x47235e=a2_0x6b4911,_0xd9a9d4=await pool[_0x47235e(0x18c)]();try{await _0xd9a9d4[_0x47235e(0x19a)](_0x47235e(0x196)),console[_0x47235e(0x18a)](_0x47235e(0x1a1));}catch(_0x32b991){console[_0x47235e(0x186)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antibot\x27:',_0x32b991);}finally{_0xd9a9d4['release']();}}createAntibotTable();async function atbajouterOuMettreAJourJid(_0xd695d0,_0x599789){const _0xfaf25d=a2_0x6b4911,_0x17cb4c=await pool[_0xfaf25d(0x18c)]();try{const _0x1f1634=await _0x17cb4c[_0xfaf25d(0x19a)](_0xfaf25d(0x191),[_0xd695d0]),_0x4da690=_0x1f1634[_0xfaf25d(0x188)]['length']>0x0;_0x4da690?await _0x17cb4c['query']('UPDATE\x20antibot\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2',[_0x599789,_0xd695d0]):await _0x17cb4c[_0xfaf25d(0x19a)](_0xfaf25d(0x19d),[_0xd695d0,_0x599789,_0xfaf25d(0x187)]),console[_0xfaf25d(0x18a)](_0xfaf25d(0x195)+_0xd695d0+'\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antibot\x27.');}catch(_0x32c44c){console[_0xfaf25d(0x186)]('Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,',_0x32c44c);}finally{_0x17cb4c[_0xfaf25d(0x182)]();}};async function atbmettreAJourAction(_0x2c4ddc,_0x2c328e){const _0x1900c6=a2_0x6b4911,_0x44ba10=await pool[_0x1900c6(0x18c)]();try{const _0x2a370e=await _0x44ba10[_0x1900c6(0x19a)](_0x1900c6(0x191),[_0x2c4ddc]),_0x569c5e=_0x2a370e[_0x1900c6(0x188)][_0x1900c6(0x19b)]>0x0;_0x569c5e?await _0x44ba10[_0x1900c6(0x19a)]('UPDATE\x20antibot\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2',[_0x2c328e,_0x2c4ddc]):await _0x44ba10[_0x1900c6(0x19a)](_0x1900c6(0x19d),[_0x2c4ddc,_0x1900c6(0x197),_0x2c328e]),console[_0x1900c6(0x18a)](_0x1900c6(0x180)+_0x2c4ddc+_0x1900c6(0x183));}catch(_0x45dc5b){console[_0x1900c6(0x186)](_0x1900c6(0x19f),_0x45dc5b);}finally{_0x44ba10[_0x1900c6(0x182)]();}};async function atbverifierEtatJid(_0x80224b){const _0x496444=a2_0x6b4911,_0x205f89=await pool[_0x496444(0x18c)]();try{const _0xdb5dc=await _0x205f89[_0x496444(0x19a)](_0x496444(0x18f),[_0x80224b]);if(_0xdb5dc[_0x496444(0x188)][_0x496444(0x19b)]>0x0){const _0x1b294e=_0xdb5dc[_0x496444(0x188)][0x0]['etat'];return _0x1b294e===_0x496444(0x18e);}else return![];}catch(_0x4a54f3){return console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20',_0x4a54f3),![];}finally{_0x205f89[_0x496444(0x182)]();}};async function atbrecupererActionJid(_0x362662){const _0x263ef6=a2_0x6b4911,_0x5eb6be=await pool[_0x263ef6(0x18c)]();try{const _0x1be36a=await _0x5eb6be[_0x263ef6(0x19a)](_0x263ef6(0x19c),[_0x362662]);if(_0x1be36a['rows']['length']>0x0){const _0x11a15b=_0x1be36a[_0x263ef6(0x188)][0x0][_0x263ef6(0x190)];return _0x11a15b;}else return _0x263ef6(0x187);}catch(_0x18336d){return console[_0x263ef6(0x186)]('Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:',_0x18336d),_0x263ef6(0x187);}finally{_0x5eb6be['release']();}};module[a2_0x6b4911(0x184)]={'atbmettreAJourAction':atbmettreAJourAction,'atbajouterOuMettreAJourJid':atbajouterOuMettreAJourJid,'atbverifierEtatJid':atbverifierEtatJid,'atbrecupererActionJid':atbrecupererActionJid};