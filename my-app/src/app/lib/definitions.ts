export type Image = {
    src: string;
    alt: string;
}

export type ImageProps = {
    images: Image[];
}

export type SkeletonCardProps = {
  shape: "text" | "rectangular" | "rounded" | "circular"; // valid MUI variants
  width: number;
  height: number;
};