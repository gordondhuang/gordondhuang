import { Skeleton } from "@mui/material";
import { SkeletonCardProps } from "@/lib/definitions";


export function SkeletonCard({shape, width, height}: SkeletonCardProps) {
    return (
        <Skeleton animation="wave" variant={shape} width={width} height={height}/>
    );
}