class Api::V1::AuthController < ApplicationController


    skip_before_action :logged_in?
    
    def create
        # byebug
        user = User.find_by(username: params[:username]) #find the user

        if user && user.authenticate(params[:password]) #verify password is correct
            #if password is correct, send back: username & token:
            #user.id is the unique item:
            # {console.log("in the auth control: ", user.username, encode_token({user_id: user.id}))}

            # render json: {username: user.username, token: encode_token({user_id: user.id}) }
            render json: {username: user.username, token: encode_token({user_id: user.id}),user_id: user.id }

        else
            #if password is wrong, return an error
            render json: {error: "invalid username or password"}
        end
        
    end

end
