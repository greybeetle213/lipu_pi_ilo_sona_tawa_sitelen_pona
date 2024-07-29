// ==UserScript==
// @name         o ante e lipu tawa sitelen pona
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wikipesija.org/*
// @match        https://lipukule.org/*
// @match        https://lipumonsuta.neocities.org/*
// @match        https://utala.pona.la/*
// @match        https://jan-lawa-lili.gitlab.io/*
// @match        https://tokipona.org/sitata/
// @match        https://ante-toki-ktane.glitch.me/www.bombmanual.com/web/tokipona.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var TokiPonaLatin=["a","akesi","ala","alasa","ali","ale","anpa","ante","anu","awen","e","en","esun","ijo","ike","ilo","insa","jaki","jan","jelo","jo","kala","kalama","kama","kasi","ken","kepeken","kili","kiwen","ko","kon","kule","kulupu","kute","la","lape","laso","lawa","len","lete","li","lili","linja","lipu","loje","lon","luka","lukin","lupa","ma","mama","mani","meli","mi","mije","moku","moli","monsi","mu","mun","musi","mute","nanpa","nasa","nasin","nena","ni","nimi","noka","o","olin","ona","open","pakala","pali","palisa","pan","pana","pi","pilin","pimeja","pini","pipi","poka","poki","pona","pu","sama","seli","selo","seme","sewi","sijelo","sike","sin","sina","sinpin","sitelen","sona","soweli","suli","suno","supa","suwi","tan","taso","tawa","telo","tenpo","toki","tomo","tu","unpa","uta","utala","walo","wan","waso","wawa","weka","wile","namako","kin","oko","kipisi","leko","monsuta","tonsi","jasima","kijetesantakalu","soko","meso", "epiku", "kokosila", "lanpan", "n", "misikeke", "ku"];
    var latinforcaps = ""
    for(var i=0;i<TokiPonaLatin.length;i++){
        latinforcaps+="|"+TokiPonaLatin[i].toUpperCase()
    }
    latinforcaps = " ?\\b(" + latinforcaps.slice(1) + ")\\b ?"
    var TokiPonaSitelen = ['󱤀', '󱤁', '󱤂', '󱤃', '󱤄', '󱤄', '󱤅', '󱤆', '󱤇', '󱤈', '󱤉', '󱤊', '󱤋', '󱤌', '󱤍', '󱤎', '󱤏', '󱤐', '󱤑', '󱤒', '󱤓', '󱤔', '󱤕', '󱤖', '󱤗', '󱤘', '󱤙', '󱤚', '󱤛', '󱤜', '󱤝', '󱤞', '󱤟', '󱤠', '󱤡', '󱤢', '󱤣', '󱤤', '󱤥', '󱤦', '󱤧', '󱤨', '󱤩', '󱤪', '󱤫', '󱤬', '󱤭', '󱤮', '󱤯', '󱤰', '󱤱', '󱤲', '󱤳', '󱤴', '󱤵', '󱤶', '󱤷', '󱤸', '󱤹', '󱤺', '󱤻', '󱤼', '󱤽', '󱤾', '󱤿', '󱥀', '󱥁', '󱥂', '󱥃', '󱥄', '󱥅', '󱥆', '󱥇', '󱥈', '󱥉', '󱥊', '󱥋', '󱥌', '󱥍', '󱥎', '󱥏', '󱥐', '󱥑', '󱥒', '󱥓', '󱥔', '󱥕', '󱥖', '󱥗', '󱥘', '󱥙', '󱥚', '󱥛', '󱥜', '󱥝', '󱥞', '󱥟', '󱥠', '󱥡', '󱥢', '󱥣', '󱥤', '󱥥', '󱥦', '󱥧', '󱥨', '󱥩', '󱥪', '󱥫', '󱥬', '󱥭', '󱥮', '󱥯', '󱥰', '󱥱', '󱥲', '󱥳', '󱥴', '󱥵', '󱥶', '󱥷', '󱥸', '󱥹', '󱥺', '󱥻', '󱥼', '󱥽', '󱥾', '󱥿', '󱦀', '󱦁', '󱦂', '󱦃', '󱦄', '󱦅', '󱦆', '󱦇', '󱦈']
    var TokiPonaPunctuation={
        openBracket: "󱦐",
        closeBracket: "󱦑",
        cartuche: "󱦒",
        stop: "󱦜",
        colon: "󱦝",
        openQuote: "🭽",
        closeQoute: "🭿"
    }
    function splitMora(word) {
        let splitword = Array.from(word);
        for (let letter = 0; letter < splitword.length; letter++) {
          if (letter >= splitword.length - 1) {
            break;
          }
          if (
            "ptksmnljw".includes(splitword[letter]) &&
            "aeiou".includes(splitword[letter + 1])
          ) {
            splitword[letter] = splitword[letter] + splitword.splice(letter + 1, 1)[0];
          }
        }
        return splitword;
    }
    function IsTPWord(word){
        for(var letter = 0; letter < word.length; letter++){
            if("ptksmnljwaeiou".indexOf(word[letter])==-1){
                return(false)
            }
        }
        if(word.indexOf("-") == -1){
            for(var morph = 0; morph < splitMora(word).length; morph++){
                if(splitMora(word)[morph].length == 1 && "aeioun".indexOf(splitMora(word)[morph])==-1){
                    return(false)
                    break
                }
            }
        }
        return(true)
    }
    var compoundGlyfs = ["anpa lawa", "ijo akesi", "ijo ala(?! ijo)", "ijo alasa", "ijo ale", "ijo ali", "ijo anpa", "ijo ante", "ijo apeja", "ijo awen", "ijo esun", "ijo ike", "ijo ilo", "ijo insa", "ijo jaki", "ijo jan", "ijo jelo", "ijo jo", "ijo kala", "ijo kalama", "ijo kama", "ijo kasi", "ijo ken", "ijo kijetesantakalu", "ijo kili", "ijo kin", "ijo kipisi", "ijo kiwen", "ijo ko", "ijo kon", "ijo kule", "ijo kulupu", "ijo kute", "ijo lape", "ijo laso", "ijo lawa", "ijo leko", "ijo len", "ijo lete", "ijo lili", "ijo linja", "ijo lipu", "ijo loje", "ijo lon", "ijo luka", "ijo lukin", "ijo lupa", "ijo ma", "ijo mama", "ijo mani", "ijo meli", "ijo mi", "ijo mije", "ijo moku", "ijo moli", "ijo monsi", "ijo monsuta", "ijo mu", "ijo mun", "ijo musi", "ijo mute", "ijo namako", "ijo nanpa", "ijo nasa", "ijo nasin", "ijo nena", "ijo ni", "ijo ni li seme", "ijo nimi", "ijo noka", "ijo oko", "ijo olin", "ijo ona", "ijo open", "ijo pakala", "ijo pake", "ijo pali", "ijo palisa", "ijo pan", "ijo pana", "ijo pilin", "ijo pimeja", "ijo pini", "ijo pipi", "ijo poka", "ijo poki", "ijo pona", "ijo pu", "ijo seli", "ijo selo", "ijo seme", "ijo sewi", "ijo sijelo", "ijo sike", "ijo sin", "ijo sina", "ijo sinpin", "ijo sitelen", "ijo sona", "ijo soweli", "ijo suli", "ijo suno", "ijo supa", "ijo suwi", "ijo taso", "ijo telo", "ijo tenpo", "ijo toki", "ijo tomo", "ijo tonsi", "ijo tu", "ijo unpa", "ijo uta", "ijo utala", "ijo walo", "ijo wan", "ijo waso", "ijo wawa", "ijo weka", "ijo wile", "ike ala(?! ike)", "ike lili", "ike lukin", "ilo kipisi", "ilo lape", "ilo lukin", "ilo moli", "ilo musi", "ilo nanpa", "ilo oko", "ilo open", "ilo suno", "ilo toki", "jan ala(?! jan)", "jan alasa", "jan ale", "jan ali", "jan ante", "jan ike", "jan kala", "jan kalama", "jan kasi", "jan kulupu", "jan lawa", "jan lili", "jan monsuta", "jan mute", "jan nasa", "jan ni", "jan olin", "jan pakala", "jan pali", "jan poka", "jan pona", "jan seme", "jan sewi", "jan sin", "jan sona", "jan suli", "jan suwi", "jan toki", "jan unpa", "jan utala", "jan wawa", "kala lete", "kala lili", "kalama musi", "kasi jelo", "kasi kule", "kasi laso", "kasi lili", "kasi loje", "kasi pimeja", "kasi walo", "kili jelo", "kili laso", "kili lili", "kili loje", "kili palisa", "kili pimeja", "kili suwi", "kili walo", "kiwen jelo", "kiwen kasi", "kiwen laso", "kiwen lete", "kiwen lili", "kiwen loje", "kiwen mun", "kiwen pimeja", "kiwen seli", "kiwen suno", "kiwen walo", "ko jaki", "ko jelo", "ko kasi", "ko kule", "ko laso", "ko lete", "ko lili", "ko loje", "ko nasa", "ko pimeja", "ko seli", "ko walo", "kon lete", "laso kasi", "laso mun", "laso sewi", "laso telo", "len jan", "len jelo", "len laso", "len lawa", "len lili", "len loje", "len luka", "len noka", "len pimeja", "len sin", "len walo", "linja lili", "linja pona", "linja sike", "linja suwi", "lipu kasi", "lipu nanpa", "lipu nimi", "lipu sewi", "lipu sona", "lipu tenpo", "lipu toki", "loje jelo", "loje walo", "lupa jaki", "lupa kiwen", "lupa kute", "lupa lili", "lupa meli", "lupa monsi", "lupa nena", "lupa tomo", "ma ale", "ma ali", "ma ike", "ma kasi", "ma ni", "ma pona", "ma tomo", "mama mama", "mama meli", "mama mije", "mama tonsi", "meli ike", "meli lili", "meli pona", "meli tonsi", "meli unpa", "meli wawa", "mije ike", "mije lili", "mije pona", "mije tonsi", "mije unpa", "mije wawa", "musi lili", "nasin nanpa", "nena kon", "nena kute", "nena lili", "nena mama", "nena meli", "nimi sin", "palisa lili", "pilin ala(?!pilin)", "pilin ike", "pilin nasa", "pilin pakala", "pilin pona", "poki kon", "poki len", "poki lete", "poki lili", "poki seli", "poki telo", "pona ala(?! pona)", "pona lili", "pona lukin", "selo len", "selo soweli", "sike lili", "sitelen ike", "sitelen ma", "sitelen monsuta", "sitelen pona", "sitelen sitelen", "sitelen toki", "sona ala(?! sona)", "sona ike", "sona lili", "sona ma", "sona nanpa", "sona pona", "sona sijelo", "sona tenpo", "sona toki", "sona utala", "supa lape", "supa lawa", "supa lupa", "supa moku", "supa monsi", "supa pali", "telo lete", "telo lili", "toki ala(?! toki)", "toki ike", "toki pona", "toki sin", "toki sona", "toki utala", "tomo lape", "tomo mani", "tomo moku", "tomo monsuta", "tomo nasin", "tomo ni", "tomo pali", "tomo sona", "tomo tawa", "tomo unpa", "tomo utala", "tonsi ike", "tonsi lili", "tonsi pona", "tonsi sin", "tonsi unpa", "tonsi wawa", "tu luka", "tu tu", "tu wan", "walo pimeja", "wan luka", "wan tu", "wawa tenpo"]
    containerGlyfs = ["anpa", "ijo", "jan", "kala", "kili", "kiwen", "ko", "lawa", "len", "lipu", "luka", "lupa", "mije", "nena", "pi", "pilin", "poka", "poki", "pona", "sitelen", "sona", "suno", "tomo", "toki", "tonsi", "walo", "wile"];
    nonContainableGlyfs = ["o", "anu", "e", "en", "kama", "kepeken", "la", "li", "lon", "pi", "tan", "tawa", "sama", "te", "to"];
    weirdGlyfs = ["luka"];
    allWords = ["a", "akesi", "ala", "alasa", "ale", "ali", "anpa", "ante", "anu", "awen", "en", "esun", "ijo", "ike", "ilo", "insa", "jaki", "jan", "jelo", "jo", "kala", "kalama", "kama", "kasi", "ken", "kepeken", "kili", "kin", "kiwen", "ko", "kon", "kule", "kulupu", "kute", "la", "lape", "laso", "lawa", "len", "lete", "lili", "linja", "lipu", "loje", "lon", "luka", "lukin", "lupa", "ma", "mama", "mani", "meli", "mi", "mije", "moku", "moli", "monsi", "mu", "mun", "musi", "mute", "nanpa", "nasa", "nasin", "nena", "ni", "nimi", "noka", "namako", "o", "oko", "olin", "ona", "open", "pakala", "pali", "palisa", "pan", "pana", "pi", "pilin", "pimeja", "pini", "pipi", "poka", "poki", "pona", "pu", "sama", "seli", "selo", "seme", "sewi", "sijelo", "sike", "sin", "sina", "sinpin", "sitelen", "sona", "soweli", "suli", "suno", "supa", "suwi", "tan", "taso", "tawa", "telo", "tenpo", "toki", "tomo", "tu", "uta", "utala", "walo", "wan", "waso", "wawa", "weka", "wile"];
    var mastodon_Glyfs = ["a", "n", "mute", "e", "o"]
    function update_str(string, index, new_char) {
        var a_list;
        a_list = string.split("");
        a_list[index] = new_char;
        return a_list.join("");
        }
    var _pj;
    ////console.log("started")
    var allWords, bestFit, containerGlyfs, currentFit, file, fineshedSpWord, nameToSP, nonContainableGlyfs, output, validWord, visualBestFit, weirdGlyfs;
    function _pj_snippets(container) {
    function in_es6(left, right) {
        if (right instanceof Array || typeof right === "string") {
        return right.indexOf(left) > -1;
        } else {
        if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
            return right.has(left);
        } else {
            return left in right;
        }
        }
    }
    container["in_es6"] = in_es6;
    return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    function nnptosp(nnp){
        if(nnp == "WAWA" || nnp == "LA" || nnp == "ALA" || nnp == "LAWA"){
            return(nnp)
        }
        var output = ""
        var key = {"A":"󱤄", "M":"󱤼", "L":"󱤭", "T":"󱥮", "W":"󱥳"}
        nnp = nnp.split("")
        while(nnp.length != 0){
            output += key[nnp.shift()]
        }
        return(output)
    }
    function Base10ToTokiPona(base10num){
        var tokiPonaNumber = ""
        base10num.replaceAll(",","")
        if(base10num == 0){
            return "󱤂"
        }
        var endOfNumber = String(base10num)
        if(String(base10num).length % 2 == 0){
            var alisNedded = (String(base10num).length/2)-1
            base10num = Number(endOfNumber.slice(0,2))
            endOfNumber = endOfNumber.slice(2)
        }else{
            var tempnum = Number(endOfNumber.slice(0,1))
            endOfNumber = String(base10num).slice(1)
            while(tempnum>0){
                if(tempnum>=20){
                    tempnum -= 20
                    tokiPonaNumber += "󱤼"
                } else if(tempnum>=5){
                    tempnum -= 5
                    tokiPonaNumber += "󱤭"
                } else if(tempnum>=2){
                    tempnum -= 2
                    tokiPonaNumber += "󱥮"
                } else if(tempnum>=1){
                    tempnum -= 1
                    tokiPonaNumber += "󱥳"
                }
            }
            if(base10num >= 100){
                tokiPonaNumber += "󱤄"
            }
            var alisNedded = String(base10num).slice(1).length/2-1
            base10num = Number(String(base10num).slice(1))
            if(alisNedded<0){
                alisNedded = 0
            }
            base10num = Number(endOfNumber.slice(0,2))
            endOfNumber = endOfNumber.slice(2)
        }
        while(base10num > 0 || endOfNumber.length > 0 || alisNedded > 0){
            while(base10num>0){
                if(base10num>=20){
                    base10num -= 20
                    tokiPonaNumber += "󱤼"
                } else if(base10num>=5){
                    base10num -= 5
                    tokiPonaNumber += "󱤭"
                } else if(base10num>=2){
                    base10num -= 2
                    tokiPonaNumber += "󱥮"
                } else if(base10num>=1){
                    base10num -= 1
                    tokiPonaNumber += "󱥳"
                }
            }
            if(alisNedded > 0){
                alisNedded--
                base10num = Number(endOfNumber.slice(0,2))
                endOfNumber = endOfNumber.slice(2)
                tokiPonaNumber += "󱤄"
            }
        }
        return tokiPonaNumber
    }
    function getSPName(nameToSP){
        if(nameToSP == "A" || nameToSP== "E" || nameToSP== "O" || nameToSP== "N"){
            return(nameToSP)
        }
        nameToSP = nameToSP.toLowerCase()
        nameToSP = splitMora(nameToSP)
        fineshedSpWord = "";
        while (true) {
            bestFit = ["", 0];
            for (var dictanaryWord, _pj_d = 0, _pj_b = allWords, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
                dictanaryWord = _pj_b[_pj_d];
                currentFit = 0;
                for (var Mora = 0, _pj_e = nameToSP.length; Mora < _pj_e; Mora += 1) {
                if (splitMora(dictanaryWord)[Mora] === nameToSP[Mora]) {
                    currentFit += 1;
                } else {
                    break;
                }

                if (currentFit === splitMora(dictanaryWord).length) {
                    break;
                }
                }

                if (currentFit === 0) {
                ////console.log(nameToSP)
                if (dictanaryWord[0] === nameToSP[0][0]) {
                    currentFit = 0.5;
                }
                }

                if (currentFit > bestFit[1]) {
                bestFit[1] = currentFit;
                bestFit[0] = dictanaryWord;
                }
            }

            if (bestFit[1] === 0) {
                nameToSP.splice(0,1)
            }
            var displayBestFit = TokiPonaSitelen[TokiPonaLatin.indexOf(bestFit[0])]
            if (bestFit[1] === 0.5) {
                fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche
                ////console.log(nameToSP);
                nameToSP[0] = update_str(nameToSP[0], 0, "");
                ////console.log(nameToSP);

                if (nameToSP[0] === "") {
                    nameToSP.splice(0,1)
                }
            }

            if (bestFit[1] > 0.5) {
                visualBestFit = bestFit[1];

                if (nameToSP[0].length === 1) {
                visualBestFit -= 1;
                }

                nameToSP = nameToSP.slice(bestFit[1]);
                //console.log(bestFit[0])
                //console.log(bestFit[1])
                if (bestFit[1] < splitMora(bestFit[0]).length) {
                    fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche + (TokiPonaPunctuation.stop + TokiPonaPunctuation.cartuche).repeat(visualBestFit);
                } else {
                    fineshedSpWord += displayBestFit + TokiPonaPunctuation.cartuche + TokiPonaPunctuation.colon + TokiPonaPunctuation.cartuche
                }
            }

            if (nameToSP.length == 0) {
                break;
            }
        }

        ////console.log("[" + fineshedSpWord + "]");
        return(""+TokiPonaPunctuation.openBracket + fineshedSpWord + TokiPonaPunctuation.closeBracket+"")
    }
    function replaceCompound(compound){
        var splitcompound = compound.split(" ")
        splitcompound[1] = splitcompound[1].split("(")[0]
        //console.log(TokiPonaSitelen[TokiPonaLatin.indexOf(splitcompound[0])]+"\u200D"+TokiPonaSitelen[TokiPonaLatin.indexOf(splitcompound[1])]+"")
        return(TokiPonaSitelen[TokiPonaLatin.indexOf(splitcompound[0])]+"\u200D"+TokiPonaSitelen[TokiPonaLatin.indexOf(splitcompound[1])]+"")
    }
    function subn(n){
        return("󱦆"*n.length)
    }
    function suba(a){
        return("󱤀"*a.length)
    }
    var matchText = function(node, regex, callback, excludeElements) {

        excludeElements || (excludeElements = ['script', 'style', 'iframe', 'canvas']);
        //var child = node.firstChild;
        var child = node
        while (child) {
            switch (child.nodeType) {
            case 1:
//                if (excludeElements.indexOf(child.tagName.toLowerCase()) > -1){
  //                  break
    //            }
      //          matchText(child, regex, callback, excludeElements);
                break;
            case 3:
                var bk = 0;
                child.data.replace(regex, function(all) {
                    var args = [].slice.call(arguments),
                        offset = args[args.length - 2],
                        newTextNode = child.splitText(offset+bk), tag;
                    bk -= child.data.length + all.length;

                    newTextNode.data = newTextNode.data.substr(all.length);
                    tag = callback.apply(window, [child].concat(args));
                    child.parentNode.insertBefore(tag, newTextNode);
                    child = newTextNode;
                });
                regex.lastIndex = 0;
                break;
            }

            child = child.nextSibling;
        }

        return node;
    };
    function toSP(text){
        if(!text.match(/[a-zA-Z:\.,!\?"\d]/)){
            return(text)
        }
        text = text.replaceAll(/[“‘]/g, TokiPonaPunctuation.openQuote)
        text = text.replaceAll(/[”’]/g, TokiPonaPunctuation.closeQoute)

        text = text.replaceAll(/(?<=(\s|\n|^))["'](?!\s)/g, TokiPonaPunctuation.openQuote)
        text = text.replaceAll(/["']/g, TokiPonaPunctuation.closeQoute)

        for(i = 0; i < compoundGlyfs.length; i++){
            var compound = compoundGlyfs[i]
            var replaceTo = replaceCompound(compound)
            var compound_pattern = new RegExp("\\b"+compound+"\\b", "g")
            //console.log(compound_pattern)
            text = text.replaceAll(compound_pattern, replaceTo)
        }
        //console.log(text)
        for(i = 0; i < TokiPonaLatin.length; i++){
            var word = TokiPonaLatin[i]
            var pattern = new RegExp("\\b"+word+"\\b", "g")
            //var pattern_upper = new RegExp("\\b"+word.toUpperCase()+"\\b", "g")
            text = text.replaceAll(pattern, TokiPonaSitelen[i]+"")
            //text = text.replaceAll(pattern_upper, "<span>"+TokiPonaSitelen[i]+"</span>")//"<strong>"+TokiPonaSitelen[i]+"</strong>")
        }
        text = text.replaceAll(/\b[P|T|K|S|M|N|L|J|W|A|E|I|O|U][a|e|i|o|u]?n?([p|t|k|s|m|n|l|j|w][a|e|i|o|u]n?)*\b/g, getSPName)
        text = text.replaceAll(/\b[AMLTW]+\b/g, nnptosp)
        text = text.replaceAll(/\b(\d,?)+\b/g, Base10ToTokiPona)
        text = text.replaceAll(/:/g, TokiPonaPunctuation.colon)
        text = text.replaceAll(/\./g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/\?/g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/!/g, TokiPonaPunctuation.stop)
        text = text.replaceAll(/(?<=\bn*)n(?=n*\b)/g, subn) //replace nnnnnnn
        text = text.replaceAll(/(?<=\ba*)n(?=a*\b)/g, suba) //replace aaaaaaa
        text = text.replaceAll(/(?<![A-Za-z]) /g, "")
        text = text.replaceAll(/,/g, " ")
        return(text)
    }
    function allDescendants (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];
          allDescendants(child);
          if(child.nodeType==3){
              child.nodeValue = toSP(child.nodeValue)
              matchText(child, new RegExp(latinforcaps, "g"), function(node, match, offset) {//latinforcaps
                  var span = document.createElement("span");
                  span.style.fontWeight = "bolder"
                  span.style.fontStyle = "italic"
                  span.className = "search-term";
                  console.log(match)
                  var spchar = TokiPonaSitelen[TokiPonaLatin.indexOf(match.toLowerCase().replaceAll(" ", ""))]
                  span.textContent = spchar;
                  return span;
              });
          }
        }
    }
//    function replaceText(context){
//        var childNodes = context.childNodes;
//        for (var i = 0; i<childNodes.length; i++) {
//            var childNode = childNodes[i];
//            if (childNode.nodeType === 3){ // 3 is for text node
//                childNode.nodeValue = toSP(childNode.nodeValue);
//            }
//            else if (childNode.nodeType === 1 && childNode.nodeName != "HEAD"){
//                childNode = toSP(childNode);
//            }
//        }
//    }
    allDescendants(document.body)
    GM_addStyle(`
        @font-face {
            font-family: 'Sitelen Pona';
            src: url('https://greybeetle213.github.io/font-test/FairfaxHD.ttf') format('truetype');
        }
        body{
            font-family: 'Sitelen Pona' !important;
        }
    `);
    //document.head.appendChild(style);
    var elems = document.body.getElementsByTagName("*");
    for(var i = 0; i < elems.length; i++){
        elems[i].style.fontFamily = "Sitelen Pona"
        //elems[i].style.fontSize = "20px"
    }
    var observer = new MutationObserver(function(mutationsList, observer) {
        allDescendants(document.body)
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
})();
