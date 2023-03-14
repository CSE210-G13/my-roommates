export class User {
	constructor(
		uid = '',
		isUCSD = false,
		imageUrl = '',
		firstName = '',
		lastName = '',
		gender = '',
		college = '',
		major = '',
		schoolYear = '',
		languages = [],
		bedtime = '22:00',
		lifestyle = { smoking: false, children: false, pets: false, parties: false, alcohol: false, couples: false },
		maxPropertyPrice = 0,
		maxDistanceToSchool = 0,
		amenities = {
			airConditioner: false,
			pool: false,
			gym: false,
			parking: false,
			laundry: false,
			transportation: false,
		},
		numBedrooms = '',
		numBathrooms = '',
		bio = '',
		email = ['', false],
		phoneNumber = ['', false],
		discord = ['', false],
		instagram = ['', false],
		linkedin = ['', false],
		facebook = ['', false]
	) {
		this.uid = uid;
		this.isUCSD = isUCSD;
		this.imageUrl = imageUrl;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.college = college;
		this.major = major;
		this.schoolYear = schoolYear;
		this.languages = languages;
		this.bedtime = bedtime;
		this.lifestyle = lifestyle;
		this.maxPropertyPrice = maxPropertyPrice;
		this.maxDistanceToSchool = maxDistanceToSchool;
		this.amenities = amenities;
		this.numBedrooms = numBedrooms,
		this.numBathrooms = numBathrooms
		this.bio = bio;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.discord = discord;
		this.instagram = instagram;
		this.linkedin = linkedin;
		this.facebook = facebook;
	}
}

export class Property {
	constructor(
		uid = '',
		name = '',
		imageUrls = [],
		address = '',
		price = 0,
		distanceToSchool = 0,
		amenities = {
			airConditioner: false,
			pool: false,
			gym: false,
			parking: false,
			laundry: false,
			transportation: false,
		},
		numOfBedroom = 0,
		numOfBathroom = 0,
		phoneNumber = '',
		allowPets = false,
		allowSmoking = false
	) {
		this.uid = uid;
		this.name = name;
		this.imageUrls = imageUrls;
		this.address = address;
		this.price = price;
		this.distanceToSchool = distanceToSchool;
		this.amenities = amenities;
		this.numOfBedroom = numOfBedroom;
		this.numOfBathroom = numOfBathroom;
		this.phoneNumber = phoneNumber;
		this.allowPets = allowPets;
		this.allowSmoking = allowSmoking;
	}
}
