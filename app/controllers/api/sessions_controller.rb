class Api::SessionsController < ApplicationController

  def show
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json ['invalid find_by_credentials'], status 401
    end
  end

  def destroy
    if current_user
      logout
      render {}
    else
      render json: ['there is no current user'], status: 404
    end
  end

end
