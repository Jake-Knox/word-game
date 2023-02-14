

let dictIncludesA = ["AT", "EAT", "OAK", "CAT", "HEAD", "GATE", "GOATS", "GREAT"];
let dictIncludesB = [];
let dictIncludesC = [];
let dictIncludesD = ["HEAD"];
let dictIncludesE = ["EW", "EAT", "EGG", "HEAD", "GATE", "GREAT"];
let dictIncludesF = [];
let dictIncludesG = ["GREAT"];
let dictIncludesH = ["HEAD"];
let dictIncludesI = ["IN", "INN", "INK", "HIND", "HINTS"];
let dictIncludesJ = [];
let dictIncludesK = [];
let dictIncludesL = [];
let dictIncludesM = [];
let dictIncludesN = ["NO", "ON", "IN", "INN"];
let dictIncludesO = ["ON", "NO", "DOG", "OLD", "OAK", "WORD", "HOUR", "BOZO", "MOUND"];
let dictIncludesP = [];
let dictIncludesQ = [];
let dictIncludesR = ["GREAT"];
let dictIncludesS = [];
let dictIncludesT = ["AT", "EAT", "GREAT"];
let dictIncludesU = ["MUD", "HOUR" ,"MOUND"];
let dictIncludesV = [];
let dictIncludesW = [];
let dictIncludesX = [];
let dictIncludesY = [];
let dictIncludesZ = [];


const dictA1Letter =[];
const dictA2Letter =['aa', 'ab', 'ad', 'ae', 'ag', 'ah', 'ai', 'al', 'am', 'an', 'ar', 'as', 'at', 'aw', 'ax', 'ay'];
const dictA3Letter =['aah', 'aal', 'aas', 'aba', 'abo', 'abs', 'aby', 'ace', 'act', 'add', 'ado', 'ads', 'adz', 'aff', 'aft', 'aga', 'age', 'ago', 'aha', 'aid', 'ail', 'aim', 'ain', 'air', 'ais', 'ait', 'ala', 'alb', 'ale', 'all', 'alp', 'als', 'alt', 'ama', 'ami', 'amp', 'amu', 'ana', 'and', 'ane', 'ani', 'ant', 'any', 'ape', 'apt', 'arb', 'arc', 'are', 'arf', 'ark', 'arm', 'ars', 'art', 'ash', 'ask', 'asp', 'ass', 'ate', 'att', 'auk', 'ava', 'ave', 'avo', 'awa', 'awe', 'awl', 'awn', 'axe', 'aye', 'ays', 'azo'];
const dictA4Letter =['aahs', 'aals', 'abas', 'abba', 'abbe', 'abed', 'abet', 'able', 'ably', 'abos', 'abri', 'abut', 'abye', 'abys', 'aced', 'aces', 'ache', 'achy', 'acid', 'acme', 'acne', 'acre', 'acta', 'acts', 'acyl', 'adds', 'adit', 'ados', 'adze', 'aeon', 'aero', 'aery', 'afar', 'agar', 'agas', 'aged', 'agee', 'ager', 'ages', 'agha', 'agin', 'agio', 'agly', 'agma', 'agog', 'agon', 'ague', 'ahem', 'ahoy', 'aide', 'aids', 'ails', 'aims', 'ains', 'airn', 'airs', 'airt', 'airy', 'aits', 'ajar', 'ajee', 'akee', 'akin', 'alae', 'alan', 'alar', 'alas', 'alba', 'albs', 'alec', 'alee', 'alef', 'ales', 'alfa', 'alga', 'alif', 'alit', 'alky', 'alls', 'ally', 'alma', 'alme', 'alms', 'aloe', 'alow', 'alps', 'also', 'alto', 'alts', 'alum', 'amah', 'amas', 'ambo', 'amen', 'amia', 'amid', 'amie', 'amin', 'amir', 'amis', 'ammo', 'amok', 'amps', 'amus', 'amyl', 'anal', 'anas', 'ands', 'anes', 'anew', 'anga', 'anil', 'anis', 'ankh', 'anna', 'anoa', 'anon', 'ansa', 'anta', 'ante', 'anti', 'ants', 'anus', 'aped', 'aper', 'apes', 'apex', 'apod', 'apse', 'aqua', 'arak', 'arbs', 'arch', 'arco', 'arcs', 'area', 'ares', 'arfs', 'aria', 'arid', 'aril', 'arks', 'arms', 'army', 'arse', 'arts', 'arty', 'arum', 'arvo', 'aryl', 'asci', 'asea', 'ashy', 'asks', 'asps', 'atap', 'ates', 'atma', 'atom', 'atop', 'auks', 'auld', 'aunt', 'aura', 'auto', 'aver', 'aves', 'avid', 'avos', 'avow', 'away', 'awed', 'awee', 'awes', 'awls', 'awns', 'awny', 'awol', 'awry', 'axal', 'axed', 'axel', 'axes', 'axil', 'axis', 'axle', 'axon', 'ayah', 'ayes', 'ayin', 'azan', 'azon'];
const dictA5Letter = ['aahed', 'aalii', 'aargh', 'abaca', 'abaci', 'aback', 'abaft', 'abaka', 'abamp', 'abase', 'abash', 'abate', 'abbas', 'abbes', 'abbey', 'abbot', 'abeam', 'abele', 'abets', 'abhor', 'abide', 'abler', 'ables', 'abmho', 'abode', 'abohm', 'aboil', 'aboma', 'aboon', 'abort', 'about', 'above', 'abris', 'abuse', 'abuts', 'abuzz', 'abyes', 'abysm', 'abyss', 'acari', 'acerb', 'aceta', 'ached', 'aches', 'achoo', 'acids', 'acidy', 'acing', 'acini', 'ackee', 'acmes', 'acmic', 'acned', 'acnes', 'acock', 'acold', 'acorn', 'acred', 'acres', 'acrid', 'acted', 'actin', 'actor', 'acute', 'acyls', 'adage', 'adapt', 'addax', 'added', 'adder', 'addle', 'adeem', 'adept', 'adieu', 'adios', 'adits', 'adman', 'admen', 'admit', 'admix', 'adobe', 'adobo', 'adopt', 'adore', 'adorn', 'adown', 'adoze', 'adult', 'adunc', 'adust', 'adyta', 'adzes', 'aecia', 'aedes', 'aegis', 'aeons', 'aerie', 'afars', 'affix', 'afire', 'afoot', 'afore', 'afoul', 'afrit', 'after', 'again', 'agama', 'agape', 'agars', 'agate', 'agave', 'agaze', 'agene', 'agent', 'agers', 'agger', 'aggie', 'aggro', 'aghas', 'agile', 'aging', 'agios', 'agism', 'agist', 'aglee', 'aglet', 'agley', 'aglow', 'agmas', 'agone', 'agons', 'agony', 'agora', 'agree', 'agria', 'agues', 'ahead', 'ahold', 'ahull', 'aided', 'aider', 'aides', 'ailed', 'aimed', 'aimer', 'aioli', 'aired', 'airer', 'airns', 'airth', 'airts', 'aisle', 'aitch', 'aiver', 'ajiva', 'ajuga', 'akees', 'akela', 'akene', 'alack', 'alamo', 'aland', 'alane', 'alang', 'alans', 'alant', 'alarm', 'alary', 'alate', 'albas', 'album', 'alcid', 'alder', 'aldol', 'alecs', 'alefs', 'aleph', 'alert', 'alfas', 'algae', 'algal', 'algas', 'algid', 'algin', 'algor', 'algum', 'alias', 'alibi', 'alien', 'alifs', 'align', 'alike', 'aline', 'alist', 'alive', 'aliya', 'alkyd', 'alkyl', 'allay', 'allee', 'alley', 'allod', 'allot', 'allow', 'alloy', 'allyl', 'almah', 'almas', 'almeh', 'almes', 'almud', 'almug', 'aloes', 'aloft', 'aloha', 'aloin', 'alone', 'along', 'aloof', 'aloud', 'alpha', 'altar', 'alter', 'altho', 'altos', 'alula', 'alums', 'alway', 'amahs', 'amain', 'amass', 'amaze', 'amber', 'ambit', 'amble', 'ambos', 'ambry', 'ameba', 'ameer', 'amend', 'amens', 'ament', 'amias', 'amice', 'amici', 'amide', 'amido', 'amids', 'amies', 'amiga', 'amigo', 'amine', 'amino', 'amins', 'amirs', 'amiss', 'amity', 'ammos', 'amnia', 'amnic', 'amoks', 'amole', 'among', 'amort', 'amour', 'ample', 'amply', 'ampul', 'amuck', 'amuse', 'amyls', 'ancon', 'anear', 'anele', 'anent', 'angas', 'angel', 'anger', 'angle', 'angry', 'angst', 'anile', 'anils', 'anima', 'anime', 'animi', 'anion', 'anise', 'ankhs', 'ankle', 'ankus', 'anlas', 'annal', 'annas', 'annex', 'annoy', 'annul', 'anoas', 'anode', 'anole', 'anomy', 'ansae', 'antae', 'antas', 'anted', 'antes', 'antic', 'antis', 'antra', 'antre', 'antsy', 'anvil', 'aorta', 'apace', 'apart', 'apeak', 'apeek', 'apers', 'apery', 'aphid', 'aphis', 'apian', 'aping', 'apish', 'apnea', 'apods', 'aport', 'appal', 'appel', 'apple', 'apply', 'apres', 'apron', 'apses', 'apsis', 'apter', 'aptly', 'aquae', 'aquas', 'araks', 'arbor', 'arced', 'arcus', 'ardeb', 'ardor', 'areae', 'areal', 'areas', 'areca', 'areic', 'arena', 'arete', 'argal', 'argil', 'argle', 'argol', 'argon', 'argot', 'argue', 'argus', 'arhat', 'arias', 'ariel', 'arils', 'arise', 'arles', 'armed', 'armer', 'armet', 'armor', 'aroid', 'aroma', 'arose', 'arpen', 'arras', 'array', 'arris', 'arrow', 'arses', 'arsis', 'arson', 'artal', 'artel', 'artsy', 'arums', 'arval', 'arvos', 'aryls', 'asana', 'ascot', 'ascus', 'asdic', 'ashed', 'ashen', 'ashes', 'aside', 'asked', 'asker', 'askew', 'askoi', 'askos', 'aspen', 'asper', 'aspic', 'aspis', 'assai', 'assay', 'asses', 'asset', 'aster', 'astir', 'asyla', 'ataps', 'ataxy', 'atilt', 'atlas', 'atman', 'atmas', 'atoll', 'atoms', 'atomy', 'atone', 'atony', 'atopy', 'atria', 'atrip', 'attar', 'attic', 'audad', 'audio', 'audit', 'auger', 'aught', 'augur', 'aulic', 'aunts', 'aunty', 'aurae', 'aural', 'aurar', 'auras', 'aurei', 'aures', 'auric', 'auris', 'aurum', 'autos', 'auxin', 'avail', 'avant', 'avast', 'avens', 'avers', 'avert', 'avgas', 'avian', 'avion', 'aviso', 'avoid', 'avows', 'await', 'awake', 'award', 'aware', 'awash', 'awful', 'awing', 'awned', 'awoke', 'awols', 'axels', 'axial', 'axile', 'axils', 'axing', 'axiom', 'axion', 'axite', 'axled', 'axles', 'axman', 'axmen', 'axone', 'axons', 'ayahs', 'ayins', 'azans', 'azide', 'azido', 'azine', 'azlon', 'azoic', 'azole', 'azons', 'azote', 'azoth', 'azure'];

const dictB2Letter = [];
const dictB3Letter = [];
const dictB4Letter = [];
const dictB5Letter = [];


// dictIncludesA, dictIncludesB, dictIncludesC, dictIncludesD, dictIncludesE, dictIncludesF, dictIncludesG, dictIncludesH, dictIncludesI, dictIncludesJ, dictIncludesK, dictIncludesL, dictIncludesM, dictIncludesN, dictIncludesO, dictIncludesP, dictIncludesQ, dictIncludesR, dictIncludesS, dictIncludesT, dictIncludesU, dictIncludesV, dictIncludesW, dictIncludesX, dictIncludesY, dictIncludesZ 

export { dictA2Letter, dictA3Letter, dictA4Letter, dictA5Letter };
export { dictB2Letter, dictB3Letter, dictB4Letter, dictB5Letter };



export {dictIncludesA, dictIncludesB, dictIncludesC, dictIncludesD, dictIncludesE, dictIncludesF, dictIncludesG, dictIncludesH, dictIncludesI, dictIncludesJ, dictIncludesK, dictIncludesL, dictIncludesM, dictIncludesN, dictIncludesO, dictIncludesP, dictIncludesQ, dictIncludesR, dictIncludesS, dictIncludesT, dictIncludesU, dictIncludesV, dictIncludesW, dictIncludesX, dictIncludesY, dictIncludesZ} ;

