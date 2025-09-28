import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  await prisma.brainlift.createMany({
    data: [
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts:
          "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)",
      },
    ],
  })

  console.log("Seed data created successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
