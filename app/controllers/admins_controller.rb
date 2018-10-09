class AdminsController < ApplicationController
  # before_action :authenticate_admin, only: [:new, :create, :edit, :update, :destroy]


  
  def about
    @admin =  Admin.first
  end

  def resources
    @admin =  Admin.first
  end


end
