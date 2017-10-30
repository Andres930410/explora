class StaticController < ApplicationController
  def index
  end
  def information
    @buildings = Building.all.paginate(page: params[:page],per_page: 10)
  end

  def show
    @building = Building.find_by_id(params[:id])
  end

  def map
  end

  def buildings
    if request.xhr?
      @buildings = Building.all
      render json: @buildings,status: :ok
    else
      redirect_to root_path
    end
  end

  def entertaiment
  end

  def physical
    render 'physical'
  end

  def cultural
    render 'cultural'
  end

  def research
  end

end
