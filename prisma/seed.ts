import { prisma } from '@/lib/prisma';
async function main() {

  const camera1 = await prisma.camera.create({
    data: { name: 'Main Entrance', location: 'Gate 1' },
  });
  const camera2 = await prisma.camera.create({
    data: { name: 'Parking Lot', location: 'Zone B' },
  });
  const camera3 = await prisma.camera.create({
    data: { name: 'Back Alley', location: 'Rear Zone' },
  });

  const cameras = [camera1, camera2, camera3];
  const types = ['Gun Threat', 'Face Recognised', 'Unauthorized Access'];
  const thumbnails = [
    '/thumbnails/gun.png',
    '/thumbnails/face.png',
    '/thumbnails/incident2.png',
  ];
  for (let i = 0; i < 12; i++) {
    const randomCamera = cameras[i % cameras.length];
    const randomType = types[i % types.length];
    const randomThumbnail = thumbnails[i % thumbnails.length];

    const startTime = new Date();
    startTime.setHours(8 + i); 
    const endTime = new Date(startTime.getTime() + 10 * 60 * 1000); 

    await prisma.incident.create({
      data: {
        cameraId: randomCamera.id,
        type: randomType,
        tsStart: startTime,
        tsEnd: endTime,
        thumbnailUrl: randomThumbnail,
        resolved: i % 4 === 0, 
      },
    });
  }

  console.log(' Seeded 3 cameras and 12 incidents.');
}

main()
  .catch((e) => {
    console.error('Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


