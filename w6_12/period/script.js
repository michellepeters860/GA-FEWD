$(document).ready(function(){

initPeriodTable();


$(document).on('click','.element',function(){
	$(this).css('z-index','1');
	if(!$(this).hasClass('active')){
		$(this).animate({'left':'-=25px','top':'-=25px','width':'100px','height':'100px','z-index':1},300);
		$(this).addClass('active');
	}

});
$(document).on('mouseout','.active',function(){
	$('.active').removeClass('active');
	$(this).animate({'left':'+=25px','top':'+=25px','width':'50px','height':'50px','z-index':'auto'}
		,300,
		function(){
			$(this).css('z-index','auto');
		}
	);

});

function initPeriodTable(){
var elements = [
    [ "H", "Hydrogen", 'non-metal',"1.00794", 1, 1 ],
    [ "He", "Helium", 'noble-gas',"4.002602", 18, 1 ],
    [ "Li", "Lithium", 'alkali-metal',"6.941", 1, 2 ],
    [ "Be", "Beryllium",'alkaline-earth-metal', "9.012182", 2, 2 ],
    [ "B", "Boron", 'other-metal',"10.811", 13, 2 ],
    [ "C", "Carbon",  'non-metal',"12.0107", 14, 2 ],
    [ "N", "Nitrogen", 'non-metal',"14.0067", 15, 2 ],
    [ "O", "Oxygen", 'non-metal',"15.9994", 16, 2 ],
    [ "F", "Fluorine", 'halogen',"18.9984032", 17, 2 ],
    [ "Ne", "Neon",  'noble-gas',"20.1797", 18, 2 ],
    [ "Na", "Sodium", 'alkali-metal',"22.98976...", 1, 3 ],
    [ "Mg", "Magnesium", 'alkaline-earth-metal',"24.305", 2, 3 ],
    [ "Al", "Aluminium",'other-metal', "26.9815386", 13, 3 ],
    [ "Si", "Silicon", 'other-metal',"28.0855", 14, 3 ],
    [ "P", "Phosphorus", 'non-metal',"30.973762", 15, 3 ],
    [ "S", "Sulfur", 'non-metal',"32.065", 16, 3 ],
    [ "Cl", "Chlorine", 'halogen',"35.453", 17, 3 ],
    [ "Ar", "Argon",  'noble-gas',"39.948", 18, 3 ],
    [ "K", "Potassium", 'alkali-metal',"39.948", 1, 4 ],
    [ "Ca", "Calcium", 'alkaline-earth-metal',"40.078", 2, 4 ],
    [ "Sc", "Scandium", 'transition-metal',"44.955912", 3, 4 ],
    [ "Ti", "Titanium", 'transition-metal',"47.867", 4, 4 ],
    [ "V", "Vanadium", 'transition-metal',"50.9415", 5, 4 ],
    [ "Cr", "Chromium", 'transition-metal',"51.9961", 6, 4 ],
    [ "Mn", "Manganese", 'transition-metal',"54.938045", 7, 4 ],
    [ "Fe", "Iron", 'transition-metal',"55.845", 8, 4 ],
    [ "Co", "Cobalt", 'transition-metal',"58.933195", 9, 4 ],
    [ "Ni", "Nickel", 'transition-metal',"58.6934", 10, 4 ],
    [ "Cu", "Copper", 'transition-metal',"63.546", 11, 4 ],
    [ "Zn", "Zinc", 'transition-metal',"65.38", 12, 4 ],
    [ "Ga", "Gallium", 'other-metal',"69.723", 13, 4 ],
    [ "Ge", "Germanium", 'other-metal',"72.63", 14, 4 ],
    [ "As", "Arsenic", 'other-metal',"74.9216", 15, 4 ],
    [ "Se", "Selenium", 'non-metal',"78.96", 16, 4 ],
    [ "Br", "Bromine", 'halogen',"79.904", 17, 4 ],
    [ "Kr", "Krypton",  'noble-gas',"83.798", 18, 4 ],
    [ "Rb", "Rubidium", 'alkali-metal',"85.4678", 1, 5 ],
    [ "Sr", "Strontium", 'alkaline-earth-metal',"87.62", 2, 5 ],
    [ "Y", "Yttrium", 'transition-metal',"88.90585", 3, 5 ],
    [ "Zr", "Zirconium", 'transition-metal',"91.224", 4, 5 ],
    [ "Nb", "Niobium", 'transition-metal',"92.90628", 5, 5 ],
    [ "Mo", "Molybdenum", 'transition-metal',"95.96", 6, 5 ],
    [ "Tc", "Technetium", 'transition-metal',"(98)", 7, 5 ],
    [ "Ru", "Ruthenium", 'transition-metal',"101.07", 8, 5 ],
    [ "Rh", "Rhodium", 'transition-metal',"102.9055", 9, 5 ],
    [ "Pd", "Palladium", 'transition-metal',"106.42", 10, 5 ],
    [ "Ag", "Silver", 'transition-metal',"107.8682", 11, 5 ],
    [ "Cd", "Cadmium", 'transition-metal',"112.411", 12, 5 ],
    [ "In", "Indium",'other-metal', "114.818", 13, 5 ],
    [ "Sn", "Tin", 'other-metal',"118.71", 14, 5 ],
    [ "Sb", "Antimony",'other-metal', "121.76", 15, 5 ],
    [ "Te", "Tellurium",'other-metal', "127.6", 16, 5 ],
    [ "I", "Iodine", 'halogen',"126.90447", 17, 5 ],
    [ "Xe", "Xenon",  'noble-gas',"131.293", 18, 5 ],
    [ "Cs", "Caesium", 'alkali-metal',"132.9054", 1, 6 ],
    [ "Ba", "Barium", 'alkaline-earth-metal',"132.9054", 2, 6 ],
    [ "La", "Lanthanum", 'lanthanide',"138.90547", 4, 9 ],
    [ "Ce", "Cerium", 'lanthanide',"140.116", 5, 9 ],
    [ "Pr", "Praseodymium", 'lanthanide',"140.90765", 6, 9 ],
    [ "Nd", "Neodymium", 'lanthanide',"144.242", 7, 9 ],
    [ "Pm", "Promethium", 'lanthanide',"(145)", 8, 9 ],
    [ "Sm", "Samarium", 'lanthanide',"150.36", 9, 9 ],
    [ "Eu", "Europium", 'lanthanide',"151.964", 10, 9 ],
    [ "Gd", "Gadolinium", 'lanthanide',"157.25", 11, 9 ],
    [ "Tb", "Terbium", 'lanthanide',"158.92535", 12, 9 ],
    [ "Dy", "Dysprosium", 'lanthanide',"162.5", 13, 9 ],
    [ "Ho", "Holmium", 'lanthanide',"164.93032", 14, 9 ],
    [ "Er", "Erbium", 'lanthanide',"167.259", 15, 9 ],
    [ "Tm", "Thulium", 'lanthanide',"168.93421", 16, 9 ],
    [ "Yb", "Ytterbium", 'lanthanide',"173.054", 17, 9 ],
    [ "Lu", "Lutetium", 'lanthanide',"174.9668", 18, 9 ],
    [ "Hf", "Hafnium", 'transition-metal',"178.49", 4, 6 ],
    [ "Ta", "Tantalum", 'transition-metal',"180.94788", 5, 6 ],
    [ "W", "Tungsten", 'transition-metal',"183.84", 6, 6 ],
    [ "Re", "Rhenium", 'transition-metal',"186.207", 7, 6 ],
    [ "Os", "Osmium", 'transition-metal',"190.23", 8, 6 ],
    [ "Ir", "Iridium", 'transition-metal',"192.217", 9, 6 ],
    [ "Pt", "Platinum", 'transition-metal',"195.084", 10, 6 ],
    [ "Au", "Gold", 'transition-metal',"196.966569", 11, 6 ],
    [ "Hg", "Mercury",'transition-metal', "200.59", 12, 6 ],
    [ "Tl", "Thallium",'other-metal', "204.3833", 13, 6 ],
    [ "Pb", "Lead",'other-metal', "207.2", 14, 6 ],
    [ "Bi", "Bismuth",'other-metal', "208.9804", 15, 6 ],
    [ "Po", "Polonium", 'other-metal',"(209)", 16, 6 ],
    [ "At", "Astatine", 'halogen',"(210)", 17, 6 ],
    [ "Rn", "Radon",  'noble-gas',"(222)", 18, 6 ],
    [ "Fr", "Francium", 'alkali-metal',"(223)", 1, 7 ],
    [ "Ra", "Radium", 'alkaline-earth-metal',"(226)", 2, 7 ],
    [ "Ac", "Actinium", 'actinide',"(227)", 4, 10 ],
    [ "Th", "Thorium", 'actinide',"232.03806", 5, 10 ],
    [ "Pa", "Protactinium", 'actinide',"231.0588", 6, 10 ],
    [ "U", "Uranium", 'actinide',"238.02891", 7, 10 ],
    [ "Np", "Neptunium", 'actinide',"(237)", 8, 10 ],
    [ "Pu", "Plutonium", 'actinide',"(244)", 9, 10 ],
    [ "Am", "Americium", 'actinide',"(243)", 10, 10 ],
    [ "Cm", "Curium", 'actinide',"(247)", 11, 10 ],
    [ "Bk", "Berkelium", 'actinide',"(247)", 12, 10 ],
    [ "Cf", "Californium", 'actinide',"(251)", 13, 10 ],
    [ "Es", "Einstenium", 'actinide',"(252)", 14, 10 ],
    [ "Fm", "Fermium", 'actinide',"(257)", 15, 10 ],
    [ "Md", "Mendelevium", 'actinide',"(258)", 16, 10 ],
    [ "No", "Nobelium",'actinide', "(259)", 17, 10 ],
    [ "Lr", "Lawrencium", 'actinide',"(262)", 18, 10 ],
    [ "Rf", "Rutherfordium", 'transition-metal',"(267)", 4, 7 ],
    [ "Db", "Dubnium", 'transition-metal',"(268)", 5, 7 ],
    [ "Sg", "Seaborgium", 'transition-metal',"(271)", 6, 7 ],
    [ "Bh", "Bohrium", 'transition-metal',"(272)", 7, 7 ],
    [ "Hs", "Hassium", 'transition-metal',"(270)", 8, 7 ],
    [ "Mt", "Meitnerium", 'unknown-chem-props', "(276)", 9, 7 ],
    [ "Ds", "Darmstadium", 'unknown-chem-props',"(281)", 10, 7 ],
    [ "Rg", "Roentgenium", 'unknown-chem-props',"(280)", 11, 7 ],
    [ "Cn", "Copernicium", 'transition-metal',"(285)", 12, 7 ],
    [ "Uut", "Unutrium", 'unknown-chem-props',"(284)", 13, 7 ],
    [ "Fl", "Flerovium", 'unknown-chem-props',"(289)", 14, 7 ],
    [ "Uup", "Ununpentium", 'unknown-chem-props',"(288)", 15, 7 ],
    [ "Lv", "Livermorium", 'unknown-chem-props',"(293)", 16, 7 ],
    [ "Uus", "Ununseptium", 'unknown-chem-props',"(294)", 17, 7 ],
    [ "Uuo", "Ununoctium", 'unknown-chem-props',"(294)", 18, 7 ]
  ];
  
  
  for(i=0;i<elements.length; i++){
  	var elm = "<div id='elm"+(i+1)+"' class='element "+elements[i][2]+"' name='"+elements[i][1]+"' an='"+elements[i][3]+"' am='"+elements[i][3]+"' style='left:"+(elements[i][4]*50)+"px; top:"+(elements[i][5]*50)+"px'>"+elements[i][0]+"</div>";
  	$('#periodic_table').append(elm)
  
  }
  
}


});


