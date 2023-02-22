export class User {
	constructor(
		firstName = '',
		lastName = '',
		gender = '',
		college = '',
		major = '',
		schoolYear = '',
		languages = [],
		bedtime = '',
		habits = [],
		maxPropertyPrice = 0,
		maxDistanceToSchool = 0,
		amenities = [],
		bio = '',
		email = ['', false],
		phoneNumber = ['', false],
		discord = ['', false],
		instgram = ['', false],
		linkedin = ['', false],
		facebook = ['', false]
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.college = college;
		this.major = major;
		this.schoolYear = schoolYear;
		this.languages = languages;
		this.bedtime = bedtime;
		this.habits = habits;
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

