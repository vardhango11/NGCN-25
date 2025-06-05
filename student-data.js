    // Static student data
    const studentsData = [
      { name: "Shivamani", expertise: "Cloud Computing", avatar: "Images/p1.png" },
      { name: "Surya", expertise: "Cloud Computing", avatar: "Images/p6.jpg" },
      { name: "Gopi", expertise: "AI and Machine Learning", avatar: "Images/p3.jpg" },
      { name: "Viswesh", expertise: "Data Science", avatar: "Images/p2.png" },
      { name: "Sri Sougandhika", expertise: "Mobile Computing", avatar: "Images/p4.jpeg" },
      { name: "Hari Sai Ganesh", expertise: "IoT", avatar: "Images/p5.jpg" },
      { name: "Shenbaga Sujan ", expertise: "Cybersecurity", avatar: "Images/p7.jpg" },
      { name: "Aditya Vardhan", expertise: "Software Engineering", avatar: "Images/p8.jpg" },
      { name: "Madhav Kartheek", expertise: "Distributed Systems", avatar: "Images/p9.png" },
      { name: "Sravan Kumar", expertise: "Quantum Computing", avatar: "Images/p10.jpg" },
      { name: " Yasasvi Jayavanth", expertise: "Cloud Computing", avatar: "Images/p11.jpg" },
      { name: "Venkata Siva", expertise: "Network Security", avatar: "Images/p12.jpg" },
      { name: "Ayush Kant", expertise: "AI and Machine Learning", avatar: "Images/p13.jpg" },
      { name: "Pathlavath Mukesh", expertise: "Data Science", avatar: "Images/p14.jpg" },
      { name: "Rahul", expertise: "Mobile Computing", avatar: "Images/p15.png" },
      { name: "Ankit Kumar", expertise: "IoT", avatar: "Images/p16.png" },
      { name: "Rajiv Kumar", expertise: "Cybersecurity", avatar: "Images/p17.png" },
      { name: "Deoansh Deo", expertise: "Software Engineering", avatar: "Images/p18.png" },
      { name: "Himesh Purohit", expertise: "Distributed Systems", avatar: "Images/p19.png" },
      { name: "Mayank Tanwar", expertise: "Quantum Computing", avatar: "Images/p20.png" },
      { name: "Pawan Sharma", expertise: "Blockchain Technology", avatar: "Images/p21.png" },
      { name: "Krishnamurthi", expertise: "Computer Vision", avatar: "Images/p22.png" },
      { name: "Suraj", expertise: "DevOps Engineering", avatar: "Images/p24.png" },
      { name: "Madhumitha", expertise: "Natural Language Processing", avatar: "Images/p25.png" },
      { name: "Sriman Srinivasan", expertise: "Robotics", avatar: "Images/p26.png" },
      { name: "Abhinav Sharma", expertise: "Edge Computing", avatar: "Images/p27.png" },
      { name: "Dinesh Sharma", expertise: "High Performance Computing", avatar: "Images/p36.png" },
      { name: "Shivam Vats", expertise: "Bioinformatics", avatar: "Images/p37.png" },
      { name: "Prateek Raushan", expertise: "Augmented Reality", avatar: "Images/p38.jpg" },
      { name: "Charithanjali", expertise: "Virtual Reality", avatar: "Images/p30.jpg" },
       { name: "Anil kumar Reddy", expertise: "Virtual Reality", avatar: "Images/p31.png" },
        { name: "Sowmya", expertise: "Virtual Reality", avatar: "Images/p32.png" },
         { name: "Akhila", expertise: "Virtual Reality", avatar: "Images/p28.png" },
          { name: "Umar Fathima Kulsum", expertise: "Virtual Reality", avatar: "Images/p29.png" },
      { name: "Lahari", expertise: "Virtual Reality", avatar: "Images/p33.png" },
      { name: "Shaik Reshma", expertise: "Virtual Reality", avatar: "Images/p35.png" },
];

    const STUDENTS_PER_PAGE = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(studentsData.length / STUDENTS_PER_PAGE);

    function renderStudents(page) {
      const startIndex = (page - 1) * STUDENTS_PER_PAGE;
      const endIndex = startIndex + STUDENTS_PER_PAGE;
      const studentsToShow = studentsData.slice(startIndex, endIndex);

      const studentsGrid = document.getElementById('students-grid');
      studentsGrid.innerHTML = '';

      studentsToShow.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'flex flex-col gap-3 text-center pb-3 opacity-0 animate-fade-in';

        studentCard.innerHTML = `
                    <div class="px-4">
                        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full hover:scale-105 transition-transform duration-300" 
                             style="background-image: url('${student.avatar}');">
                        </div>
                    </div>
                    <div>
                        <p class="text-[#101518] text-base font-medium leading-normal">${student.name}</p>
                        <p class="text-[#5c748a] text-sm font-normal leading-normal">Expertise: ${student.expertise}</p>
                    </div>
                `;

        studentsGrid.appendChild(studentCard);

        // Trigger animation
        setTimeout(() => {
          studentCard.classList.remove('opacity-0');
          studentCard.classList.add('opacity-100');
        }, 50);
      });

      // Update showing range
      const showingStart = startIndex + 1;
      const showingEnd = Math.min(endIndex, studentsData.length);
      document.getElementById('showing-range').textContent = `${showingStart}-${showingEnd}`;
      document.getElementById('total-students').textContent = studentsData.length;
    }

    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      // Previous button
      const prevButton = document.createElement('button');
      prevButton.className = `flex size-10 items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} rounded-full transition-colors`;
      prevButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
            `;
      prevButton.onclick = () => {
        if (currentPage > 1) {
          currentPage--;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      pagination.appendChild(prevButton);

      // Page numbers
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      // Add first page if not in range
      if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.className = 'text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full hover:bg-gray-100 transition-colors';
        firstPageButton.textContent = '1';
        firstPageButton.onclick = () => {
          currentPage = 1;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(firstPageButton);

        if (startPage > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'flex size-10 items-center justify-center text-[#111418]';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `text-sm font-${i === currentPage ? 'bold' : 'normal'} leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full ${i === currentPage ? 'bg-[#dce8f3] text-white' : 'hover:bg-gray-100'} transition-colors`;
        pageButton.textContent = i;
        pageButton.onclick = () => {
          currentPage = i;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(pageButton);
      }

      // Add last page if not in range
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'flex size-10 items-center justify-center text-[#111418]';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }

        const lastPageButton = document.createElement('button');
        lastPageButton.className = 'text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full hover:bg-gray-100 transition-colors';
        lastPageButton.textContent = totalPages;
        lastPageButton.onclick = () => {
          currentPage = totalPages;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(lastPageButton);
      }

      // Next button
      const nextButton = document.createElement('button');
      nextButton.className = `flex size-10 items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} rounded-full transition-colors`;
      nextButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
            `;
      nextButton.onclick = () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderStudents(currentPage);
          renderPagination();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      pagination.appendChild(nextButton);
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
      renderStudents(currentPage);
      renderPagination();
    });

