'use client';

interface Props {
  image: string;
  onSelect: (src: string) => void;
}

const allImages = [
  { src: '/thumbnails/incident2.png', label: 'Cam 1' },
  { src: '/thumbnails/face.png', label: 'Cam 2' },
  { src: '/thumbnails/gun.png', label: 'Cam 3' },
];

export default function IncidentPlayer({ image, onSelect }: Props) {
  
  const otherImages = allImages.filter(img => img.src !== image);

  return (
    <div className="relative w-full h-72">
      
      <img
        src={image}
        alt="Main Incident View"
        className="w-full h-full object-cover rounded shadow"
      />

      
      <div className="absolute bottom-2 right-2 flex gap-2 bg-black/40 p-1 rounded">
        {otherImages.map((img) => (
          <div
            key={img.src}
            className="flex flex-col items-center text-xs text-white cursor-pointer"
            onClick={() => onSelect(img.src)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-20 h-14 object-cover rounded"
            />
            <span>{img.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
