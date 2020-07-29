class ApplicationController < ActionController::API

    before_action :logged_in?

    def encode_token(payload)   #method that creates the token
        JWT.encode(payload, "se042020")
        # JWT.encode(payload, "se042020", "HS256")
    end

    def logged_in?
        # byebug

        headers = request.headers["Authorization"]
        # console.log("headers: ", headers)
        token = headers.split(" ")[1]

        begin
            #we were storing user_id in token
            #this gives us the user_id:
            user_id = JWT.decode(token, "se042020")[0]["user_id"]
            user = User.find(user_id)
        rescue #if error generates, do rescue (aka user not found)
            user = nil
        # ensure
            #ensure will always run - with n error or without

        end
        #this is if false unless true
        render json: {error: "Please LogIn"} unless user 
    end
end
