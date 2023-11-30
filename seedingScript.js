const db = require('./models/db');

const seedVehicleWheelData = [
  { wheel: '2' },
  { wheel: '4' },
];

const seedVehicleTypeData = [
  { wheel: '1', type: 'Hatchback' },
  { wheel: '1', type: 'SUV' },
  { wheel: '1', type: 'Sedan' },
  { wheel: '2', type: 'Cruiser' },
  { wheel: '2', type: 'Sports' },
];

const seedVehicleModelData = [
  { type: 1, model: 'Hatchback A' },
  { type: 2, model: 'SUV A' },
  { type: 3, model: 'Sedan A' },
  { type: 1, model: 'SUV B' },
  { type: 4, model: 'Cruiser A' },
  { type: 5, model: 'Sports A' },
];

// Table creation queries
const createTables = async () => {
  // Create vehicles_wheel table
  await db.query(`
    CREATE TABLE IF NOT EXISTS vehicles_wheel (
      id INT AUTO_INCREMENT PRIMARY KEY,
      wheel VARCHAR(255) NOT NULL
    )
  `);

  // Create vehicles_type table
  await db.query(`
    CREATE TABLE IF NOT EXISTS vehicles_type (
      id INT AUTO_INCREMENT PRIMARY KEY,
      wheel INT NOT NULL,
      type VARCHAR(255) NOT NULL,
      FOREIGN KEY (wheel) REFERENCES vehicles_wheel(id)
    )
  `);

  // Create vehicles_model table
  await db.query(`
    CREATE TABLE IF NOT EXISTS vehicles_model (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type INT NOT NULL,
      model VARCHAR(255) NOT NULL,
      FOREIGN KEY (type) REFERENCES vehicles_type(id)
    )
  `);
};

// Seed vehicles_wheel
const seedVehicleWheel = async () => {
  for (const wheels of seedVehicleWheelData) {
    const { wheel } = wheels;
    await db.query('INSERT INTO vehicles_wheel (wheel) VALUES (?)', [wheel]);
  }
};

// Seed vehicles_type
const seedVehicleType = async () => {
  for (const types of seedVehicleTypeData) {
    const { wheel, type } = types;
    await db.query('INSERT INTO vehicles_type (wheel, type) VALUES (?, ?)', [wheel, type]);
  }
};

// Seed vehicles_model
const seedVehicleModel = async () => {
  for (const models of seedVehicleModelData) {
    const { type, model } = models;
    await db.query('INSERT INTO vehicles_model (type, model) VALUES (?, ?)', [type, model]);
  }
};

// Execute table creation and seeding
const seedDatabase = async () => {
  try {
    await createTables();
    await seedVehicleWheel();
    await seedVehicleType();
    await seedVehicleModel();
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error.stack);
  } finally {
    db.end(); // Close the database connection
  }
};

seedDatabase();
