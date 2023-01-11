class Category {
  id: string;
  title: string;
  color: string;
  imageSrc: string;
  constructor(id: string, title: string, color: string, imageSrc: string) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.imageSrc = imageSrc;
  }
}

export default Category;
