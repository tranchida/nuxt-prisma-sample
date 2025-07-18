import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
    {
      firstName: "John",
      lastName: "Doe",
      employed: "Manager",
      email: "john.doe@example.com",
      active: true,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      employed: "Developer",
      email: "jane.doe@example.com",
      active: false,
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      employed: "Developer",
      email: "alice.smith@example.com", 
      active: true,
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      employed: "Manager",
      email: "bob.johnson@example.com",
      active: true,
    },
    {
      firstName: "Carol",
      lastName: "Williams",
      employed: "Developer",
      email: "carol.williams@example.com",
      active: false,
    },
    {
      firstName: "David",
      lastName: "Brown",
      employed: "Manager",
      email: "david.brown@example.com",
      active: true,
    },
    {
      firstName: "Eve",
      lastName: "Jones",
      employed: "Developer",
      email: "eve.jones@example.com",
      active: true,
    },
    {
      firstName: "Frank",
      lastName: "Garcia",
      employed: "Manager",
      email: "frank.garcia@example.com",
      active: false,
    },
    {
      firstName: "Grace",
      lastName: "Miller",
      employed: "Developer",
      email: "grace.miller@example.com",
      active: true,
    },
    {
      firstName: "Henry",
      lastName: "Davis",
      employed: "Manager",
      email: "henry.davis@example.com",
      active: true,
    },
    {
      firstName: "Ivy",
      lastName: "Rodriguez",
      employed: "Developer",
      email: "ivy.rodriguez@example.com",
      active: false,
    },
    {
      firstName: "Jack",
      lastName: "Martinez",
      employed: "Manager",
      email: "jack.martinez@example.com",
      active: true,
    },
    {
      firstName: "Kelly",
      lastName: "Anderson",
      employed: "Developer",
      email: "kelly.anderson@example.com",
      active: true,
    },
    {
      firstName: "Liam",
      lastName: "Taylor",
      employed: "Manager",
      email: "liam.taylor@example.com",
      active: false,
    },
    {
      firstName: "Mia",
      lastName: "Thomas",
      employed: "Developer",
      email: "mia.thomas@example.com",
      active: true,
    },
    {
      firstName: "Noah",
      lastName: "Hernandez",
      employed: "Manager",
      email: "noah.hernandez@example.com",
      active: true,
    },
    {
      firstName: "Olivia",
      lastName: "Moore",
      employed: "Developer",
      email: "olivia.moore@example.com",
      active: false,
    },
    {
      firstName: "Peter",
      lastName: "Martin",
      employed: "Manager",
      email: "peter.martin@example.com",
      active: true,
    },
    {
      firstName: "Quinn",
      lastName: "Lee",
      employed: "Developer",
      email: "quinn.lee@example.com",
      active: true,
    },
    {
      firstName: "Ryan",
      lastName: "Perez",
      employed: "Manager",
      email: "ryan.perez@example.com",
      active: false,
    },
    {
      firstName: "Sarah",
      lastName: "Thompson",
      employed: "Developer",
      email: "sarah.thompson@example.com",
      active: true,
    },
    {
      firstName: "Tyler",
      lastName: "White",
      employed: "Manager",
      email: "tyler.white@example.com",
      active: true,
    },
    {
      firstName: "Uma",
      lastName: "Harris",
      employed: "Developer",
      email: "uma.harris@example.com",
      active: false,
    },
    {
      firstName: "Victor",
      lastName: "Sanchez",
      employed: "Manager",
      email: "victor.sanchez@example.com",
      active: true,
    },
    {
      firstName: "Wendy",
      lastName: "Clark",
      employed: "Developer",
      email: "wendy.clark@example.com",
      active: true,
    },
    {
      firstName: "Xavier",
      lastName: "Lewis",
      employed: "Manager",
      email: "xavier.lewis@example.com",
      active: false,
    },
    {
      firstName: "Yara",
      lastName: "Robinson",
      employed: "Developer",
      email: "yara.robinson@example.com",
      active: true,
    },
    {
      firstName: "Zack",
      lastName: "Walker",
      employed: "Manager",
      email: "zack.walker@example.com",
      active: true,
    },
    {
      firstName: "Amy",
      lastName: "Hall",
      employed: "Developer",
      email: "amy.hall@example.com",
      active: false,
    },
    {
      firstName: "Brandon",
      lastName: "Young",
      employed: "Manager",
      email: "brandon.young@example.com",
      active: true,
    },
    {
      firstName: "Chloe",
      lastName: "King",
      employed: "Developer",
      email: "chloe.king@example.com",
      active: true,
    },
    {
      firstName: "Daniel",
      lastName: "Wright",
      employed: "Manager",
      email: "daniel.wright@example.com",
      active: false,
    },
    {
      firstName: "Emma",
      lastName: "Lopez",
      employed: "Developer",
      email: "emma.lopez@example.com",
      active: true,
    },
    {
      firstName: "Felix",
      lastName: "Hill",
      employed: "Manager",
      email: "felix.hill@example.com",
      active: true,
    },
    {
      firstName: "Georgia",
      lastName: "Scott",
      employed: "Developer",
      email: "georgia.scott@example.com",
      active: false,
    },
    {
      firstName: "Hugo",
      lastName: "Green",
      employed: "Manager",
      email: "hugo.green@example.com",
      active: true,
    },
    {
      firstName: "Isabel",
      lastName: "Adams",
      employed: "Developer",
      email: "isabel.adams@example.com",
      active: true,
    },
    {
      firstName: "James",
      lastName: "Baker",
      employed: "Manager",
      email: "james.baker@example.com",
      active: false,
    },
    {
      firstName: "Kate",
      lastName: "Nelson",
      employed: "Developer",
      email: "kate.nelson@example.com",
      active: true,
    },
    {
      firstName: "Lucas",
      lastName: "Carter",
      employed: "Manager",
      email: "lucas.carter@example.com",
      active: true,
    },
    {
      firstName: "Maya",
      lastName: "Mitchell",
      employed: "Developer",
      email: "maya.mitchell@example.com",
      active: false,
    },
    {
      firstName: "Nathan",
      lastName: "Roberts",
      employed: "Manager",
      email: "nathan.roberts@example.com",
      active: true,
    },
    {
      firstName: "Oscar",
      lastName: "Turner",
      employed: "Developer",
      email: "oscar.turner@example.com",
      active: true,
    },
    {
      firstName: "Penny",
      lastName: "Phillips",
      employed: "Manager",
      email: "penny.phillips@example.com",
      active: false,
    },
    {
      firstName: "Quincy",
      lastName: "Campbell",
      employed: "Developer",
      email: "quincy.campbell@example.com",
      active: true,
    },
    {
      firstName: "Rachel",
      lastName: "Parker",
      employed: "Manager",
      email: "rachel.parker@example.com",
      active: true,
    },
    {
      firstName: "Steve",
      lastName: "Evans",
      employed: "Developer",
      email: "steve.evans@example.com",
      active: false,
    },
    {
      firstName: "Tara",
      lastName: "Edwards",
      employed: "Manager",
      email: "tara.edwards@example.com",
      active: true,
    },
    {
      firstName: "Ulysses",
      lastName: "Collins",
      employed: "Developer",
      email: "ulysses.collins@example.com",
      active: true,
    },
    {
      firstName: "Violet",
      lastName: "Stewart",
      employed: "Manager",
      email: "violet.stewart@example.com",
      active: false,
    },
    {
      firstName: "William",
      lastName: "Morris",
      employed: "Developer",
      email: "william.morris@example.com",
      active: true,
    },
    {
      firstName: "Xena",
      lastName: "Rogers",
      employed: "Manager",
      email: "xena.rogers@example.com",
      active: true,
    },
    {
      firstName: "Yuri",
      lastName: "Reed",
      employed: "Developer",
      email: "yuri.reed@example.com",
      active: false,
    },
    {
      firstName: "Zoe",
      lastName: "Cook",
      employed: "Manager",
      email: "zoe.cook@example.com",
      active: true
    }
  ]});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });