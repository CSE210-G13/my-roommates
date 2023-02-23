export class User {
	constructor(
		imageUrl = '',
		firstName = '',
		lastName = '',
		gender = '',
		college = '',
		major = '',
		schoolYear = '',
		languages = [],
		bedtime = '22:00',
		lifestyle = { smoke: false, children: false, pets: false, parties: false, alcohol: false, couples: false },
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
		bio = '',
		email = ['', false],
		phoneNumber = ['', false],
		discord = ['', false],
		instgram = ['', false],
		linkedin = ['', false],
		facebook = ['', false]
	) {
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
		this.bio = bio;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.discord = discord;
		this.instgram = instgram;
		this.linkedin = linkedin;
		this.facebook = facebook;
	}
}
