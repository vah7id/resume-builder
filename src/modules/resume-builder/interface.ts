// interfaces

export interface IResumeBuilder {
	personal: IPersonal;
	educations: Array<IEducation> | null;
	experiences: Array<IExperience> | null;
}

// personal state object type
export interface IPersonal {
	first_name: string;
	last_name: string;
	location: string;
}

// education state object type
export interface IEducation {
	institute: string;
	field: string;
	start_date: string;
	end_date: string;
}

// experience state object type
export interface IExperience {
	company: string;
	position: string;
	start_date: string;
	end_date: string;
}
