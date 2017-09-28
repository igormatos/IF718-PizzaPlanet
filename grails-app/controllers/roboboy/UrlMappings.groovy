package roboboy

class UrlMappings {

	static mappings = {

		"/$controller/$action?/$id?"()

		"/api/$controller/$attr?/$id?"{
	    action = [GET:"show", POST:"save", PUT:"update", DELETE:"remove"]
	  }

    "/"(controller:"login")
		"500"(view:'/error')
	}
}
