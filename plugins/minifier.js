function run(code) {

    // =========== Replace Units

    const pixelLengths = {
        ch: 8,
        pt: 4 / 3,
        pc: 16,
        vw: 4,
        vh: 3,
        in: 96,
        ex: 7.16,
        em: 16,
        mm: 96 / 25.4,
        q: 96 / 101.6,
        px: 1
    };
    const units = Object.keys(pixelLengths);
    
    code = code.replace(/(-?\d*\.?\d+)(px|vw|vh|pc|pt|ch|in|ex|em|mm|q)\b/g, (_, value, unit) => {
            const px = parseFloat(value) * pixelLengths[unit];
            let best = value + unit;
    
            for (const target of units) {
                const converted = px / pixelLengths[target];
                let str = Number(converted.toFixed(6))
                    .toString()
                    .replace(/^(-?)0\./, "$1.");
                if (str === "-0")
                    str = "0";
                const candidate =
                    str === "0"
                        ? "0"
                        : str + target;
                if (candidate.length < best.length)
                    best = candidate;
            }
            return best;
        }
    );
  
    // =========== Basic minifier
  
    code = code
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
        .replace(/\>\s*\</g,'><')
        .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g,'')
        .replace(/\s*\{\s*/g,'{')
        .replace(/\s*\}\s*/g,'}')
        .replace(/\s*\:\s*/g,':')
        .replace(/\s*\;\s*/g,';')
        .replace(/\s*\,\s*/g,',')
        .replace(/\s*\~\s*/g,'~')
        .replace(/\s*\>\s*/g,'>')
        .replace(/\s*\+\s*/g,'+')
        .replace(/\s*\!\s*/g,'!')
        .replaceAll('transparent','#0000')
        .replaceAll(') ',')')
        .replaceAll('/ ','/')
        .replaceAll(' /','/')
        .replaceAll(';}','}')
        .replace('</style>', '')
        .replaceAll('% ', '%');

    return code;
}