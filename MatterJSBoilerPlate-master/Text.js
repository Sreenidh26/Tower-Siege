class Text
{
    constructor(x,y)
    {
        this.image=loadImage("text.png")
    }

    display()
    {
        imageMode(CENTER);
        image(this.image, 750,250, this.width, this.height);
    }
}