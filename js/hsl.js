function hslCalc(R, G, B)
{
    let fR = r / 255.0;
    let fG = g / 255.0;
    let fB = b / 255.0;
    
    let Max = (fR >= fG && fR >= fB) ? fR : (fG >= fB && fG >= fR) ? fG : fB;
    let Min = (fR <= fG && fR <= fB) ? fR : (fG <= fB && fG <= fR) ? fG : fB;


    let Hue;
    let Saturation;
    let Lightness = (Min + Max) / 2.0;

    if(Max == Min) {
        Hue = Saturation = 0.0;
    } else {
        //  Calc Saturation
        Saturation = Lightness < 0.5 ? (Max - Min) / (Max + Min) : (Max - Min) / (2.0 - Max - Min);

        // Calc Hue
        switch (Max) {
            case fR: Hue = (fG - fB) / (Max - Min); break;
            case fG: Hue = 2.0 + (fB - fR) / (Max - Min); break;
            case fB: Hue = 4.0 + (fR - fG) / (Max - Min); break;
        }

        Hue *= 60.0;

        Hue < 0.0 ? Hue+= 360.0 : Hue;
    }

    // round to 2 decimal places
    Hue = Math.round(Hue + Number.EPSILON);
    Saturation = Math.round(((Saturation * 100) + Number.EPSILON) * 100) / 100;
    Lightness = Math.round(((Lightness * 100) + Number.EPSILON) * 100) / 100;

    console.log(`Hue: ${Hue}`);
    console.log(`Saturation: ${Saturation}%`);
    console.log(`Lightness: ${Lightness}%`);
}

hslCalc(0, 235, 203);