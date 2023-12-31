// https://github.com/igordanchenko/react-photo-album/blob/86bb32d2e25d376dd517b5f197b57a2a9d2ba3fa/docs/examples/nextjs.md?plain=1#L7-L25

'use client';

import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

import clsxMerge from '@/lib/clsxMerge';

export default function PhotoAlbumImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <picture
      style={{
        ...wrapperStyle,
        position: 'relative',
      }}
    >
      <Image
        priority
        fill
        src={photo.src}
        className={clsxMerge('rounded-2xl', className)}
        {...{ alt, title, sizes, onClick }}
      />
    </picture>
  );
}
