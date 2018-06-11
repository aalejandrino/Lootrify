class Api::SearchController < ApplicationController

  def users
    @users = User.search(params[:query])

    render 'api/users/index'
  end

end
 
