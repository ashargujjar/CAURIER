// MongoDB initialization script for Docker
// This script runs when the MongoDB container starts for the first time

db = db.getSiblingDB("tcs_db");

// Create collections if they don't exist
db.createCollection("users");
db.createCollection("parcels");
db.createCollection("riders");
db.createCollection("admins");

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.parcels.createIndex({ trackingNumber: 1 }, { unique: true });
db.parcels.createIndex({ userId: 1 });
db.parcels.createIndex({ riderId: 1 });
db.riders.createIndex({ email: 1 }, { unique: true });

print("✅ MongoDB initialized successfully");
