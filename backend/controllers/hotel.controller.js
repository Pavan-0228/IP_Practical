// controllers/hotel.controller.js
import { Hotel } from "../models/Hotel.model.js";

// Create a new hotel
export const createHotel = async (req, res) => {
	const { name, location, rooms, amenities, pricePerNight } = req.body;
	try {
		const hotel = await Hotel.create({
			name,
			location,
			rooms,
			amenities,
			pricePerNight,
		});
		res.status(201).json(hotel);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get all hotels
export const getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get a hotel by ID
export const getHotelById = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		if (!hotel) return res.status(404).json({ message: "Hotel not found" });
		res.status(200).json(hotel);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update a hotel
export const updateHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!hotel) return res.status(404).json({ message: "Hotel not found" });
		res.status(200).json(hotel);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Delete a hotel
export const deleteHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findByIdAndDelete(req.params.id);
		if (!hotel) return res.status(404).json({ message: "Hotel not found" });
		res.status(200).json({ message: "Hotel deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
